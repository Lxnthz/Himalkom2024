import { ERROR_MESSAGES } from '../constants.js';
/**
 * @load ./base-provider.doc.md
 * @memberof module:@adminjs/upload
 * @alias BaseProvider
 * @hide
 * @private
 */
class BaseProvider {
    /**
     * Name is used to verify if the object passed by {@link UploadOptions#provider} is
     * this type. We cannot check typeof because there could be a different versions of
     * npm package installed in a project.
     */
    name;
    /**
     * Bucket is a place where files should be stored. Usually it is a folder location
     */
    bucket;
    /**
     * Provider extra options
     */
    opts;
    /**
     * @param { string } bucket     place where files should be stored
     */
    constructor(bucket, opts) {
        this.name = 'BaseProvider';
        this.bucket = bucket;
        this.opts = opts || {};
    }
    /**
     * Uploads file to given bucket
     *
     * @param {UploadedFile} file uploaded by AdminJS file
     * @param {string} key file path
     * @param {ActionContext} context
     * @abstract
     */
    async upload(file, key, context) {
        throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED('BaseProvider#upload'));
    }
    /**
     * Deletes given file
     *
     * @param {string} key file path
     * @param {string} bucket where file should be uploaded
     * @param {ActionContext} context
     * @abstract
     */
    async delete(key, bucket, context) {
        throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED('BaseProvider#delete'));
    }
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
    path(key, bucket, context) {
        throw new Error(ERROR_MESSAGES.METHOD_NOT_IMPLEMENTED('BaseProvider#path'));
    }
}
export { BaseProvider };
