// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Button, Icon } from '@adminjs/design-system';
import { flat } from 'adminjs';
import React from 'react';
import { AudioMimeTypes, ImageMimeTypes } from '../types/mime-types.type.js';
const SingleFile = (props) => {
    const { name, path, mimeType, width } = props;
    if (path && path.length) {
        if (mimeType && ImageMimeTypes.includes(mimeType)) {
            return (React.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
        }
        if (mimeType && AudioMimeTypes.includes(mimeType)) {
            return (React.createElement("audio", { controls: true, src: path },
                "Your browser does not support the",
                React.createElement("code", null, "audio"),
                React.createElement("track", { kind: "captions" })));
        }
    }
    return (React.createElement(Box, null,
        React.createElement(Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
            React.createElement(Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
            name)));
};
const File = ({ width, record, property }) => {
    const { custom } = property;
    let path = flat.get(record?.params, custom.filePathProperty);
    if (!path) {
        return null;
    }
    const name = flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
    const mimeType = custom.mimeTypeProperty
        && flat.get(record?.params, custom.mimeTypeProperty);
    if (!property.custom.multiple) {
        if (custom.opts && custom.opts.baseUrl) {
            path = `${custom.opts.baseUrl}/${name}`;
        }
        return (React.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
    }
    if (custom.opts && custom.opts.baseUrl) {
        const baseUrl = custom.opts.baseUrl || '';
        path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
    }
    return (React.createElement(React.Fragment, null, path.map((singlePath, index) => (React.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
};
export default File;
