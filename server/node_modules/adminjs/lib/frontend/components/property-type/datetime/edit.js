function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo } from 'react';
import { DatePicker, FormGroup, FormMessage } from '@adminjs/design-system';
import { recordPropertyIsEqual } from '../record-property-is-equal.js';
import { PropertyLabel } from '../utils/property-label/index.js';
import allowOverride from '../../../hoc/allow-override.js';
const Edit = props => {
  const {
    property,
    onChange,
    record
  } = props;
  const value = record.params && record.params[property.path] || '';
  const error = record.errors && record.errors[property.path];
  return /*#__PURE__*/React.createElement(FormGroup, {
    error: !!error
  }, /*#__PURE__*/React.createElement(PropertyLabel, {
    property: property
  }), /*#__PURE__*/React.createElement(DatePicker, _extends({
    value: value,
    disabled: property.isDisabled,
    onChange: date => onChange(property.path, date),
    propertyType: property.type
  }, property.props)), /*#__PURE__*/React.createElement(FormMessage, null, error && error.message));
};
export default allowOverride( /*#__PURE__*/memo(Edit, recordPropertyIsEqual), 'DefaultDatetimeEditProperty');