import { expect } from 'chai';

export default (clone, propertyType, property) => {
    expect(clone).to.have.property(property);
    if (propertyType) {
        expect(clone[property], `.${property}`).to.be.a(propertyType);
    }
    delete clone[property];
};
