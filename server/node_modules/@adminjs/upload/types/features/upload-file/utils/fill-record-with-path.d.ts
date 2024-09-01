import { ActionContext, RecordJSON } from 'adminjs';
import { BaseProvider } from '../providers/index.js';
import { UploadOptionsWithDefault } from '../types/upload-options.type.js';
export declare const fillRecordWithPath: (record: RecordJSON, context: ActionContext, uploadOptionsWithDefault: UploadOptionsWithDefault, provider: BaseProvider) => Promise<RecordJSON>;
