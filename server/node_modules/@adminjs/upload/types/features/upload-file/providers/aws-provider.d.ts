import { UploadedFile } from 'adminjs';
import { DeleteObjectCommandOutput, PutObjectCommandOutput, S3 } from '@aws-sdk/client-s3';
import { BaseProvider } from './base-provider.js';
/**
 * AWS Credentials which can be set for S3 file upload.
 * If not given, 'aws-sdk' will try to fetch them from
 * environmental variables.
 * @memberof module:@adminjs/upload
 */
export type AWSOptions = {
    /**
     * AWS IAM accessKeyId. By default its value is taken from AWS_ACCESS_KEY_ID env variable
    */
    accessKeyId?: string;
    /**
     * AWS IAM secretAccessKey. By default its value is taken from AWS_SECRET_ACCESS_KEY env variable
     */
    secretAccessKey?: string;
    /**
     * AWS region where your bucket was created.
    */
    region: string;
    /**
     * S3 Bucket where files will be stored
     */
    bucket: string;
    /**
     * indicates how long links should be available after page load (in minutes).
     * Default to 24h. If set to 0 adapter will mark uploaded files as PUBLIC ACL.
     */
    expires?: number;
};
export declare class AWSProvider extends BaseProvider {
    protected s3: S3;
    expires: number;
    constructor(options: AWSOptions);
    upload(file: UploadedFile, key: string): Promise<PutObjectCommandOutput>;
    delete(key: string, bucket: string): Promise<DeleteObjectCommandOutput>;
    path(key: string, bucket: string): Promise<string>;
}
