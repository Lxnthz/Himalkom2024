/* eslint-disable no-param-reassign */
import { BaseRecord, BaseResource, flat } from 'adminjs';
import { Op } from 'sequelize';
import Property from './property.js';
import convertFilter from './utils/convert-filter.js';
import createValidationError from './utils/create-validation-error.js';
const SEQUELIZE_VALIDATION_ERROR = 'SequelizeValidationError';
const SEQUELIZE_UNIQUE_ERROR = 'SequelizeUniqueConstraintError';
class Resource extends BaseResource {
    SequelizeModel;
    static isAdapterFor(rawResource) {
        return rawResource.sequelize && rawResource.sequelize.constructor.name === 'Sequelize';
    }
    constructor(SequelizeModel) {
        super(SequelizeModel);
        this.SequelizeModel = SequelizeModel;
    }
    rawAttributes() {
        // different sequelize versions stores attributes in different places
        // .modelDefinition.attributes => sequelize ^7.0.0
        // .rawAttributes => sequelize ^5.0.0
        // .attributes => sequelize ^4.0.0
        return (this.SequelizeModel.attributes
            || (this.SequelizeModel.modelDefinition?.attributes && Object.fromEntries(this.SequelizeModel.modelDefinition?.attributes))
            || this.SequelizeModel.rawAttributes);
    }
    databaseName() {
        return this.SequelizeModel.sequelize.options.database
            || this.SequelizeModel.sequelize.options.host
            || 'Sequelize';
    }
    databaseType() {
        return this.SequelizeModel.sequelize.options.dialect || 'other';
    }
    name() {
        // different sequelize versions stores attributes in different places
        // .modelDefinition.table => sequelize ^7.0.0
        // .tableName => sequelize ^4.0.0
        return (this.SequelizeModel.modelDefinition?.table?.tableName
            || this.SequelizeModel.tableName);
    }
    id() {
        return this.name();
    }
    properties() {
        return Object.keys(this.rawAttributes()).map((key) => (new Property(this.rawAttributes()[key])));
    }
    property(path) {
        const nested = path.split('.');
        // if property is an array return the array property
        if (nested.length > 1 && this.rawAttributes()[nested[0]]) {
            return new Property(this.rawAttributes()[nested[0]]);
        }
        if (!this.rawAttributes()[path]) {
            return null;
        }
        return new Property(this.rawAttributes()[path]);
    }
    async count(filter) {
        return this.SequelizeModel.count(({
            where: convertFilter(filter),
        }));
    }
    primaryKey() {
        return this.SequelizeModel.primaryKeyField || this.SequelizeModel.primaryKeyAttribute;
    }
    async populate(baseRecords, property) {
        const ids = baseRecords.map((baseRecord) => (baseRecord.param(property.name())));
        const records = await this.SequelizeModel.findAll({
            where: { [this.primaryKey()]: ids },
        });
        const recordsHash = records.reduce((memo, record) => {
            memo[record[this.primaryKey()]] = record;
            return memo;
        }, {});
        baseRecords.forEach((baseRecord) => {
            const id = baseRecord.param(property.name());
            if (recordsHash[id]) {
                const referenceRecord = new BaseRecord(recordsHash[id].toJSON(), this);
                baseRecord.populated[property.name()] = referenceRecord;
            }
        });
        return baseRecords;
    }
    async find(filter, { limit = 20, offset = 0, sort = {} }) {
        const { direction, sortBy } = sort;
        const sequelizeObjects = await this.SequelizeModel
            .findAll({
            where: convertFilter(filter),
            limit,
            offset,
            order: [[sortBy, (direction || 'asc').toUpperCase()]],
        });
        return sequelizeObjects.map((sequelizeObject) => new BaseRecord(sequelizeObject.toJSON(), this));
    }
    async findOne(id) {
        const sequelizeObject = await this.findById(id);
        if (!sequelizeObject) {
            return null;
        }
        return new BaseRecord(sequelizeObject.toJSON(), this);
    }
    async findMany(ids) {
        const sequelizeObjects = await this.SequelizeModel.findAll({
            where: {
                [this.primaryKey()]: { [Op.in]: ids },
            },
        });
        return sequelizeObjects.map((sequelizeObject) => new BaseRecord(sequelizeObject.toJSON(), this));
    }
    async findById(id) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore versions of Sequelize before 5 had findById method - after that there was findByPk
        const method = this.SequelizeModel.findByPk ? 'findByPk' : 'findById';
        return this.SequelizeModel[method](id);
    }
    async create(params) {
        const parsedParams = this.parseParams(params);
        const unflattedParams = flat.unflatten(parsedParams);
        try {
            const record = await this.SequelizeModel.create(unflattedParams);
            return record.toJSON();
        }
        catch (error) {
            if (error.name === SEQUELIZE_VALIDATION_ERROR) {
                throw createValidationError(error);
            }
            if (error.name === SEQUELIZE_UNIQUE_ERROR) {
                throw createValidationError(error);
            }
            throw error;
        }
    }
    async update(id, params) {
        const parsedParams = this.parseParams(params);
        const unflattedParams = flat.unflatten(parsedParams);
        try {
            await this.SequelizeModel.update(unflattedParams, {
                where: {
                    [this.primaryKey()]: id,
                },
                individualHooks: true,
                hooks: true,
            });
            const record = await this.findById(id);
            return record.toJSON();
        }
        catch (error) {
            if (error.name === SEQUELIZE_VALIDATION_ERROR) {
                throw createValidationError(error);
            }
            if (error.name === SEQUELIZE_UNIQUE_ERROR) {
                throw createValidationError(error);
            }
            throw error;
        }
    }
    async delete(id) {
        // we find first because we need to invoke destroy on model, so all hooks
        // instance hooks (not bulk) are called.
        // We cannot set {individualHooks: true, hooks: false} in this.SequelizeModel.destroy,
        // as it is in #update method because for some reason it wont delete the record
        const model = await this.SequelizeModel.findByPk(id);
        await model.destroy();
    }
    /**
     * Check all params against values they hold. In case of wrong value it corrects it.
     *
     * What it does exactly:
     * - removes keys with empty strings for the `number`, `float` and 'reference' properties.
     *
     * @param   {Object}  params  received from AdminJS form
     *
     * @return  {Object}          converted params
     */
    parseParams(params) {
        const parsedParams = { ...params };
        this.properties().forEach((property) => {
            const value = parsedParams[property.name()];
            if (value === '') {
                if (property.isArray() || property.type() !== 'string') {
                    delete parsedParams[property.name()];
                }
            }
        });
        return parsedParams;
    }
}
export default Resource;
