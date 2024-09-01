import { BaseRecord, UploadedFile } from 'adminjs';
import { UploadPathFunction } from '../types/upload-options.type.js';
/**
 * Creates a path to the file. Related to the given provider. If it is an AWS
 * path is related to the bucket.
 *
 * @param   {BaseRecord}  record
 * @param   {UploadedFile} file  uploaded file
 * @param   {UploadPathFunction}      [pathFunction]
 *
 * @return  {string}
 * @private
 */
export declare const buildRemotePath: (record: BaseRecord, file: UploadedFile, uploadPathFunction?: UploadPathFunction) => string;
