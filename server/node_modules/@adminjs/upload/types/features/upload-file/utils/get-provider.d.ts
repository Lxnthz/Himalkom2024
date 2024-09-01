import { BaseProvider } from '../providers/index.js';
import { AvailableDefaultProviders, UploadOptions } from '../types/upload-options.type.js';
export type GetProviderReturn = {
    name: AvailableDefaultProviders;
    provider: BaseProvider;
};
export declare const getProvider: (options: UploadOptions['provider']) => GetProviderReturn;
