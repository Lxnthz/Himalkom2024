import { BaseRecord, ComponentLoader } from 'adminjs';
import chai, { expect } from 'chai';
import sinon, { createStubInstance } from 'sinon';
import sinonChai from 'sinon-chai';
import stubProvider from '../spec/stub-provider.js';
import { deleteFileFactory } from './delete-file-factory.js';
const componentLoader = new ComponentLoader();
chai.use(sinonChai);
describe('deleteFileFactory', () => {
    const response = {};
    const request = {};
    const context = {};
    let provider;
    let record;
    let uploadOptions;
    before(() => {
        provider = stubProvider();
        uploadOptions = {
            componentLoader,
            properties: {
                key: 's3Key',
                filePath: 'resolvedPath',
                file: 'file',
                bucket: 'bucket',
                filesToDelete: 'fileToDelete',
            },
            provider: {
                aws: { bucket: 'any' },
            },
        };
        record = createStubInstance(BaseRecord, {
            id: sinon.stub().returns('1'),
            isValid: sinon.stub().returns(true),
            update: sinon.stub().returnsThis(),
            get: sinon.stub(),
        });
        context.record = record;
    });
    afterEach(() => {
        sinon.reset();
    });
    it('does nothing when file has not been uploaded', () => {
        const deleteFile = deleteFileFactory(uploadOptions, provider);
        deleteFile(response, request, context);
        expect(provider.delete).not.to.have.been.called;
    });
    it('deletes file when one was uploaded with the bucket from the db', () => {
        const [path, bucket] = ['file-to-delete-path', 'file-to-delete-bucket'];
        record.get.onCall(0).returns(path);
        record.get.onCall(1).returns(bucket);
        const deleteFile = deleteFileFactory(uploadOptions, provider);
        deleteFile(response, request, context);
        expect(provider.delete).to.have.been.calledWith(path, bucket);
    });
    it('deletes file when one was uploaded with the bucket from provider', () => {
        const [path, bucketFromProvider] = ['file-to-delete-path', undefined];
        record.get.onCall(0).returns(path);
        record.get.onCall(1).returns(bucketFromProvider);
        const deleteFile = deleteFileFactory(uploadOptions, provider);
        deleteFile(response, request, context);
        expect(provider.delete).to.have.been.calledWith(path, provider.bucket);
    });
    it('deletes multiple files when `multiple` option has been selected', () => {
        uploadOptions.multiple = true;
        const paths = ['path1', 'path2'];
        const buckets = ['bucket1'];
        record.get.onCall(0).returns(paths);
        record.get.onCall(1).returns(buckets);
        const deleteFile = deleteFileFactory(uploadOptions, provider);
        deleteFile(response, request, context);
        expect(provider.delete).to.have.callCount(2);
        expect(provider.delete).to.have.been.calledWith(paths[0], buckets[0]);
        expect(provider.delete).to.have.been.calledWith(paths[1], provider.bucket);
    });
});
