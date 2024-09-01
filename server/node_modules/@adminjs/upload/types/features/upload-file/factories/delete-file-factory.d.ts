import { After, RecordActionResponse } from 'adminjs';
import { BaseProvider } from '../providers/index.js';
import { UploadOptionsWithDefault } from '../types/upload-options.type.js';
export declare const deleteFileFactory: (uploadOptionsWithDefault: UploadOptionsWithDefault, provider: BaseProvider) => After<RecordActionResponse>;
