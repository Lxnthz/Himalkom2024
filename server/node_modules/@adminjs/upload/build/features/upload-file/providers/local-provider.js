import fs, { existsSync } from 'fs';
import path from 'path';
import { ERROR_MESSAGES } from '../constants.js';
import { BaseProvider } from './base-provider.js';
export class LocalProvider extends BaseProvider {
    constructor(options) {
        super(options.bucket, options?.opts);
        if (!existsSync(options.bucket)) {
            throw new Error(ERROR_MESSAGES.NO_DIRECTORY(options.bucket));
        }
    }
    async upload(file, key) {
        const filePath = process.platform === 'win32' ? this.path(key) : this.path(key).slice(1); // adjusting file path according to OS
        await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
        await fs.promises.rename(file.path, filePath);
    }
    async delete(key, bucket) {
        const fileLink = process.platform === 'win32'
            ? this.path(key, bucket)
            : this.path(key, bucket).slice(1);
        if (fs.existsSync(fileLink)) {
            await fs.promises.unlink(fileLink);
        }
    }
    // eslint-disable-next-line class-methods-use-this
    path(key, bucket) {
        // Windows doesn't requires the '/' in path, while UNIX system does
        return process.platform === 'win32'
            ? `${path.join(bucket || this.bucket, key)}`
            : `/${path.join(bucket || this.bucket, key)}`;
    }
}
