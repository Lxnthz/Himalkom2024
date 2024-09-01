import { deleteFile } from '../utils/delete-file.js';
export const deleteFileFactory = (uploadOptionsWithDefault, provider) => async function deleteFileHook(response, request, context) {
    const { record } = context;
    await deleteFile(uploadOptionsWithDefault, provider, context, record);
    return response;
};
