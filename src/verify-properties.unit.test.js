import {
    expect
} from './index';

import moduleToTest from './verify-properties';

describe(`src/verify-properties`, () => {
    expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(3);

    describe(`call()`, () => {
        it(`throws when missing params`, () => {
            expect(() => moduleToTest()).to.throw();
        });

        it(`throws if property not found`, () => {
            const clone = { foo: 'bar' };
            expect(() => moduleToTest(clone, null, [ 'another' ])).to.throw();
        });

        it(`removes properties`, () => {
            const clone = {
                foo: 'bar',
                another: 'property'
            };

            expect(() => moduleToTest(clone, null, [ 'foo', 'another' ])).to.not.throw();
            expect(clone).to.be.empty();
        });

        it(`fails if at least one property doesn't match type`, () => {
            const clone = {
                foo: 'bar',
                another: 5
            };

            expect(() => moduleToTest(clone, 'string', [ 'foo', 'another' ])).to.throw();
        });
    });
});
