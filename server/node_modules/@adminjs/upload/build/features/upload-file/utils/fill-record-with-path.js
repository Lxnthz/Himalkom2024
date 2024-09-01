import { flat } from 'adminjs';
export const fillRecordWithPath = async (record, context, uploadOptionsWithDefault, provider) => {
    const { properties, multiple } = uploadOptionsWithDefault;
    const key = flat.get(record?.params, properties.key);
    const storedBucket = properties.bucket && flat.get(record?.params, properties.bucket);
    let filePath;
    if (multiple && key && key.length) {
        filePath = await Promise.all(key.map(async (singleKey, index) => (provider.path(singleKey, storedBucket?.[index] ?? provider.bucket, context))));
    }
    else if (!multiple && key) {
        filePath = await provider.path(key, storedBucket ?? provider.bucket, context);
    }
    return {
        ...record,
        params: flat.set(record.params, properties.filePath, filePath),
    };
};
