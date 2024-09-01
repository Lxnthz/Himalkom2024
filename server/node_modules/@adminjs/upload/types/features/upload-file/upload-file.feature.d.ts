import { FeatureType } from 'adminjs';
import { BaseProvider } from './providers/index.js';
import UploadOptions from './types/upload-options.type.js';
export type ProviderOptions = Required<Exclude<UploadOptions['provider'], BaseProvider>>;
declare const uploadFileFeature: (config: UploadOptions) => FeatureType;
export default uploadFileFeature;
