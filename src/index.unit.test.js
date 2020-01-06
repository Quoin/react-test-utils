import { expect } from 'chai';

import * as moduleToTest from './index';

describe(`src/index`, () => {
    let clone;

    before(() => {
        clone = { ...moduleToTest };
    });

    after(() => {
        expect(clone).to.be.empty();
    });

    [
        'expect',
        'mount',
        'render',
        'sandbox',
        'shallow',
        'spy',
        'stub',
        'unexpectedFlow',
        'verifyProperties'
    ].forEach((property) => {
        it(`exposes '${property}'`, () => {
            expect(clone).to.have.property(property);
            delete clone[property];
        });
    });
});
