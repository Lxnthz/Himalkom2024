import { ActionContext, BaseRecord } from 'adminjs';
import { BaseProvider } from '../providers/index.js';
import { UploadOptionsWithDefault } from '../types/upload-options.type.js';
export declare const deleteFile: (options: UploadOptionsWithDefault, provider: BaseProvider, context: ActionContext, record?: BaseRecord) => Promise<void>;
