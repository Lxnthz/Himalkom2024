import { deleteFile } from '../utils/delete-file.js';
export const deleteFilesFactory = (uploadOptionsWithDefault, provider) => async function deleteFilesHook(response, request, context) {
    const { records = [] } = context;
    if (request.method === 'post') {
        await Promise.all(records.map(async (record) => {
            await deleteFile(uploadOptionsWithDefault, provider, context, record);
        }));
    }
    return response;
};
