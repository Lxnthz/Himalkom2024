import type { DeleteFileResponse, UploadResponse } from '@google-cloud/storage';
import { UploadedFile } from 'adminjs';
import { BaseProvider } from './base-provider.js';
/**
 * Google Storage options which can be set for GCP file upload.
 * In order to setup GCP credentials you have to follow this
 * {@link https://cloud.google.com/docs/authentication/getting-started tutorial}.
 * Basically it comes down to downloading service account and setting GOOGLE_APPLICATION_CREDENTIALS
 * env variable. After that you are ready to go.
 * @memberof module:@adminjs/upload
 */
export type GCPOptions = {
    /**
     * Google Storage Bucket name, where files will be stored
     */
    bucket: string;
    /**
     * indicates how long links should be available after page load (in minutes).
     * Default to 24h. If set to 0 adapter will mark uploaded files as public.
     */
    expires?: number;
};
export declare class GCPProvider extends BaseProvider {
    private storage;
    expires: number;
    constructor(options: GCPOptions);
    upload(file: UploadedFile, key: string): Promise<UploadResponse>;
    delete(key: string, bucket: string): Promise<DeleteFileResponse>;
    path(key: string, bucket: string): Promise<string>;
}
