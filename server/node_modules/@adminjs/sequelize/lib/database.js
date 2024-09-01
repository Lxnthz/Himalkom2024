import { BaseDatabase } from 'adminjs';
import Resource from './resource.js';
class Database extends BaseDatabase {
    sequelize;
    static isAdapterFor(database) {
        return (database.sequelize
            && database.sequelize.constructor.name === 'Sequelize')
            || database.constructor.name === 'Sequelize';
    }
    constructor(database) {
        super(database);
        this.sequelize = database.sequelize || database;
    }
    resources() {
        return Object.keys(this.sequelize.models).map((key) => (new Resource(this.sequelize.models[key])));
    }
}
export default Database;
