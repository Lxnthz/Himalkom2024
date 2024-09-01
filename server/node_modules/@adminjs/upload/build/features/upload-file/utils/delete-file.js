export const deleteFile = async (options, provider, context, record) => {
    const { properties, multiple } = options;
    const key = record?.get(properties.key);
    if (record && key && !multiple) {
        const storedBucket = properties.bucket && record.get(properties.bucket);
        await provider.delete(key, storedBucket || provider.bucket, context);
    }
    else if (record && multiple && key && key.length) {
        const storedBuckets = properties.bucket ? record.get(properties.bucket) : [];
        await Promise.all(key.map(async (singleKey, index) => (provider.delete(singleKey, storedBuckets[index] || provider.bucket, context))));
    }
};
