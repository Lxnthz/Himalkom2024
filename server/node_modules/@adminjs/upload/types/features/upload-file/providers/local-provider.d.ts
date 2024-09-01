import { UploadedFile } from 'adminjs';
import { BaseProvider, ProviderOpts } from './base-provider.js';
/**
 * Options required by the LocalAdapter
 *
 * @memberof module:@adminjs/upload
 */
export type LocalUploadOptions = {
    /**
     * Path where files will be stored. For example: `path.join(__dirname, '../public')`
     */
    bucket: string;
    /**
     * options for local provider
     */
    opts: ProviderOpts;
};
export declare class LocalProvider extends BaseProvider {
    constructor(options: LocalUploadOptions);
    upload(file: UploadedFile, key: string): Promise<any>;
    delete(key: string, bucket: string): Promise<any>;
    path(key: string, bucket?: string): string;
}
