import { After, BulkActionResponse } from 'adminjs';
import { BaseProvider } from '../providers/index.js';
import { UploadOptionsWithDefault } from '../types/upload-options.type.js';
export declare const deleteFilesFactory: (uploadOptionsWithDefault: UploadOptionsWithDefault, provider: BaseProvider) => After<BulkActionResponse>;
