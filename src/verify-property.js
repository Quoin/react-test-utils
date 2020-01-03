import { expect } from 'chai';

export default (clone, propertyType, property) => {
    expect(clone).to.have.property(property);
    if (propertyType) {
        expect(clone[property], `"clone.${property}" is '${propertyType}'.`).to.be.a(propertyType);
    }
    delete clone[property];
};
