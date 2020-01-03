import verifyProperty from './verify-property';

export default (clone, propertyType, properties) => properties.forEach((property) => verifyProperty(clone, propertyType, property));
