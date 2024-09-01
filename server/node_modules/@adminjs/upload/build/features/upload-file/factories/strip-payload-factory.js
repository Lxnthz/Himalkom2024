/* eslint-disable no-underscore-dangle */
import { flat } from 'adminjs';
import { CONTEXT_NAMESPACE, ERROR_MESSAGES } from '../constants.js';
import { validatePropertiesGlobally } from '../utils/validate-properties.js';
export const stripPayloadFactory = (uploadOptionsWithDefault) => {
    const stripFileFromPayload = async (request, context) => {
        const { properties } = uploadOptionsWithDefault;
        if (request?.payload) {
            let data = context[CONTEXT_NAMESPACE] || {};
            data = {
                ...data,
                [properties.file]: flat.get(request.payload, properties.file),
                [properties.filesToDelete]: flat.get(request.payload, properties.filesToDelete),
                __invocations: [
                    ...(data.__invocations || []),
                    { properties },
                ],
            };
            context[CONTEXT_NAMESPACE] = data;
            let filteredPayload = flat.filterOutParams(request.payload, properties.file);
            filteredPayload = flat.filterOutParams(filteredPayload, properties.filesToDelete);
            filteredPayload = flat.filterOutParams(filteredPayload, properties.filePath);
            const duplicatedOccurrences = validatePropertiesGlobally(data.__invocations);
            if (duplicatedOccurrences) {
                throw new Error(ERROR_MESSAGES.DUPLICATED_KEYS(duplicatedOccurrences));
            }
            return {
                ...request,
                payload: filteredPayload,
            };
        }
        return request;
    };
    return stripFileFromPayload;
};
export const getNamespaceFromContext = (context) => {
    const namespace = (context || {})[CONTEXT_NAMESPACE];
    return namespace || {};
};
