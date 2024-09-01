import { formatDateProperty } from '@adminjs/design-system';
export default ((value, propertyType) => {
  if (!value) {
    return '';
  }
  const date = new Date(value);
  if (date) {
    return formatDateProperty(date, propertyType);
  }
  return '';
});