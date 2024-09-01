import { ActionContext, UploadedFile } from 'adminjs';
export type ProviderOpts = {
    baseUrl?: string;
};
/**
 * @load ./base-provider.doc.md
 * @memberof module:@adminjs/upload
 * @alias BaseProvider
 * @hide
 * @private
 */
declare abstract class BaseProvider {
    /**
     * Name is used to verify if the object passed by {@link UploadOptions#provider} is
     * this type. We cannot check typeof because there could be a different versions of
     * npm package installed in a project.
     */
    name: string;
    /**
     * Bucket is a place where files should be stored. Usually it is a folder location
     */
    bucket: string;
    /**
     * Provider extra options
     */
    opts?: ProviderOpts;
    /**
     * @param { string } bucket     place where files should be stored
     */
    constructor(bucket: string, opts?: ProviderOpts);
    /**
     * Uploads file to given bucket
     *
     * @param {UploadedFile} file uploaded by AdminJS file
     * @param {string} key file path
     * @param {ActionContext} context
     * @abstract
     */
    upload(file: UploadedFile, key: string, context: ActionContext): Promise<any>;
    /**
     * Deletes given file
     *
     * @param {string} key file path
     * @param {string} bucket where file should be uploaded
     * @param {ActionContext} context
     * @abstract
     */
    delete(key: string, bucket: string, context: ActionContext): Promise<any>;
    /**
     * Returns path for the file from where it can be downloaded. It is dynamic in case of
     * time based paths: i.e. link valid in the next 24h
     *
     * @param {string} key file path
     * @param {string} bucket where file should be put
     * @param {ActionContext} context
     * @async
     * @abstract
     */
    path(key: string, bucket: string, context: ActionContext): Promise<string> | string;
}
export { BaseProvider };
