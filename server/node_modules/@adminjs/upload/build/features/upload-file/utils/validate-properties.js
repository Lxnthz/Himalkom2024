const invocationPrefix = (index) => (`__invocation__${index}__`);
/**
 * Checks if values for properties given by the user are different
 *
 * @private
 */
export const hasDuplicatedProperties = (properties) => {
    // counting how many occurrences of given value are in the keys.
    const mappedFields = Object.keys(properties).reduce((memo, key) => {
        const realKey = key.replace(new RegExp(invocationPrefix('\\d+')), '');
        const keys = memo[properties[key]] ? [...memo[properties[key]].keys, realKey] : [realKey];
        const property = properties[key] ? {
            [properties[key]]: {
                keys,
                value: properties[key],
            },
        } : {};
        return {
            ...memo,
            ...property,
        };
    }, {});
    const duplicated = Object.values(mappedFields).filter((value) => value.keys.length > 1);
    if (duplicated.length) {
        return duplicated;
    }
    return false;
};
/**
 * Checks if all properties have uniq names
 */
export const validatePropertiesGlobally = (globalContext) => {
    // eslint-disable-next-line no-param-reassign
    globalContext = globalContext || [];
    const allInvocationProperties = globalContext.reduce((memo, invocation, index) => ({
        ...(memo),
        ...Object.keys(invocation.properties).reduce((props, key) => ({
            ...props,
            [`${invocationPrefix(index)}${key}`]: invocation.properties[key],
        }), {}),
    }), {});
    return hasDuplicatedProperties(allInvocationProperties);
};
