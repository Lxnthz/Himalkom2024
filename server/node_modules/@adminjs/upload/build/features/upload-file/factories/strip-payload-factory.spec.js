/* eslint-disable no-underscore-dangle */
import { ComponentLoader } from 'adminjs';
import { expect } from 'chai';
import { CONTEXT_NAMESPACE } from '../constants.js';
import { stripPayloadFactory } from './strip-payload-factory.js';
const componentLoader = new ComponentLoader();
describe('stripPayloadFactory', () => {
    let actionContext = {};
    let uploadOptions;
    let stripPayload;
    beforeEach(() => {
        uploadOptions = {
            componentLoader,
            properties: {
                key: 's3Key',
                filePath: 'resolvedPath',
                file: 'file',
                filesToDelete: 'fileToDelete',
            },
            provider: {
                aws: { bucket: 'any' },
            },
        };
    });
    context('standard upload payload', () => {
        let payload;
        let newRequest;
        beforeEach(async () => {
            actionContext = {};
            payload = {
                [uploadOptions.properties.filePath]: 'somePath',
                [uploadOptions.properties.file]: 'someFile',
                [uploadOptions.properties.filesToDelete]: 'someFile',
            };
            stripPayload = stripPayloadFactory(uploadOptions);
            newRequest = await stripPayload({ payload, method: 'post' }, actionContext);
        });
        it('removes file, fileToDelete and filePath from the payload', () => {
            expect(newRequest.payload).not.to.have.keys(uploadOptions.properties.filePath, uploadOptions.properties.file, uploadOptions.properties.filesToDelete);
        });
        it('moves file and fileToDelete to the context', () => {
            expect(actionContext[CONTEXT_NAMESPACE]).to.contains.keys({
                [uploadOptions.properties.file]: payload[uploadOptions.properties.file],
                [uploadOptions.properties.filesToDelete]: payload[uploadOptions.properties.filesToDelete],
            });
        });
        it('throws error when user wants to use the same properties twice', async () => {
            try {
                await stripPayload({ payload, method: 'post' }, actionContext);
            }
            catch (error) {
                expect(error).not.to.be.undefined;
                return undefined;
            }
            throw new Error();
        });
        it('fills context with invocations for each run', async () => {
            uploadOptions = {
                ...uploadOptions,
                properties: {
                    key: 's3Key2',
                    filePath: 'resolvedPath2',
                    file: 'file2',
                    filesToDelete: 'fileToDelete2',
                },
            };
            stripPayload = stripPayloadFactory(uploadOptions);
            await stripPayload({ payload, method: 'post' }, actionContext);
            expect(actionContext[CONTEXT_NAMESPACE].__invocations).to.have.lengthOf(2);
        });
    });
});
