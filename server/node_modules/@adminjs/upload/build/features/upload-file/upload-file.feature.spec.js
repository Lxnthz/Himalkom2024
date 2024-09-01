import AdminJS, { ComponentLoader } from 'adminjs';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import stubProvider from './spec/stub-provider.js';
import uploadFile from './upload-file.feature.js';
chai.use(sinonChai);
const componentLoader = new ComponentLoader();
describe('uploadFileFeature', () => {
    let provider;
    let properties;
    const resolvedS3Path = 'resolvedS3Path';
    beforeEach(() => {
        provider = stubProvider(resolvedS3Path);
        properties = {
            key: 's3Key',
            filePath: 'resolvedPath',
            file: 'filePath',
        };
    });
    afterEach(() => {
        sinon.restore();
    });
    describe('constructor', () => {
        it('throws an error when provider was not been given', () => {
            expect(() => uploadFile({})).to.throw('You have to specify provider in options');
        });
        it('throws an error when provider was not been given', () => {
            const options = { provider, properties: {} };
            expect(() => uploadFile(options)).to.throw('You have to define `key` property in options');
        });
    });
    describe('show#after hook - #fillPath', () => {
        const key = 'someKeyValue';
        const getAfterHook = (options) => {
            const feature = uploadFile(options)(new AdminJS(), {});
            return feature.actions?.show?.after?.[0];
        };
        it('fills record with the path', async () => {
            const response = {
                record: {
                    params: {
                        [properties.key]: key,
                    },
                },
            };
            const fillPath = getAfterHook({ componentLoader, provider, properties });
            const ret = await fillPath(response, {}, {});
            expect(provider.path).to.have.been.calledWith(key, provider.bucket);
            expect(ret.record.params[properties.filePath]).to.equal(resolvedS3Path);
        });
        it('gets bucket from the record when it is present', async () => {
            const bucket = 'some-other-bucket';
            properties.bucket = 'storedBucketProperty';
            const response = {
                record: {
                    params: {
                        [properties.key]: key,
                        [properties.bucket]: bucket,
                    },
                },
            };
            const fillPath = getAfterHook({ componentLoader, provider, properties });
            await fillPath(response, {}, {});
            expect(provider.path).to.have.been.calledWith(key, bucket);
        });
        it('does nothing when path is not present', async () => {
            const response = {
                record: {
                    params: {
                        name: 'some value',
                    },
                },
            };
            const fillPath = getAfterHook({ componentLoader, provider, properties });
            const ret = await fillPath(response, {}, {});
            expect(ret).to.deep.eq(response);
            expect(provider.path).to.not.have.been.called;
        });
    });
});
