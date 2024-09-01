import { FormGroup, Label } from '@adminjs/design-system';
import { useTranslation } from 'adminjs';
import React from 'react';
import File from './file.js';
const Show = (props) => {
    const { property } = props;
    const { translateProperty } = useTranslation();
    return (React.createElement(FormGroup, null,
        React.createElement(Label, null, translateProperty(property.label, property.resourceId)),
        React.createElement(File, { width: "100%", ...props })));
};
export default Show;
