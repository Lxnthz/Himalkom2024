import { DropZone, DropZoneItem, FormGroup, Label } from '@adminjs/design-system';
import { flat, useTranslation } from 'adminjs';
import React, { useEffect, useState } from 'react';
const Edit = ({ property, record, onChange }) => {
    const { translateProperty } = useTranslation();
    const { params } = record;
    const { custom } = property;
    const path = flat.get(params, custom.filePathProperty);
    const key = flat.get(params, custom.keyProperty);
    const file = flat.get(params, custom.fileProperty);
    const [originalKey, setOriginalKey] = useState(key);
    const [filesToUpload, setFilesToUpload] = useState([]);
    useEffect(() => {
        // it means means that someone hit save and new file has been uploaded
        // in this case fliesToUpload should be cleared.
        // This happens when user turns off redirect after new/edit
        if ((typeof key === 'string' && key !== originalKey)
            || (typeof key !== 'string' && !originalKey)
            || (typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length)) {
            setOriginalKey(key);
            setFilesToUpload([]);
        }
    }, [key, originalKey]);
    const onUpload = (files) => {
        setFilesToUpload(files);
        onChange(custom.fileProperty, files);
    };
    const handleRemove = () => {
        onChange(custom.fileProperty, null);
    };
    const handleMultiRemove = (singleKey) => {
        const index = (flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
        const filesToDelete = flat.get(record.params, custom.filesToDeleteProperty) || [];
        if (path && path.length > 0) {
            const newPath = path.map((currentPath, i) => (i !== index ? currentPath : null));
            let newParams = flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
            newParams = flat.set(newParams, custom.filePathProperty, newPath);
            onChange({
                ...record,
                params: newParams,
            });
        }
        else {
            // eslint-disable-next-line no-console
            console.log('You cannot remove file when there are no uploaded files yet');
        }
    };
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null, translateProperty(property.label, property.resourceId)),
        React.createElement(DropZone, { onChange: onUpload, multiple: custom.multiple, validate: {
                mimeTypes: custom.mimeTypes,
                maxSize: custom.maxSize,
            }, files: filesToUpload }),
        !custom.multiple && key && path && !filesToUpload.length && file !== null && (React.createElement(DropZoneItem, { filename: key, src: path, onRemove: handleRemove })),
        custom.multiple && key && key.length && path ? (React.createElement(React.Fragment, null, key.map((singleKey, index) => {
            // when we remove items we set only path index to nulls.
            // key is still there. This is because
            // we have to maintain all the indexes. So here we simply filter out elements which
            // were removed and display only what was left
            const currentPath = path[index];
            return currentPath ? (React.createElement(DropZoneItem, { key: singleKey, filename: singleKey, src: path[index], onRemove: () => handleMultiRemove(singleKey) })) : '';
        }))) : ''));
};
export default Edit;
