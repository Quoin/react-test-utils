import {
    expect
} from './index';

import moduleToTest from './verify-property';

describe(`src/verify-property`, () => {
    it(`exports a function with 3 params`, () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(3);
    });

    describe(`call()`, () => {
        it(`finds and delete property`, () => {
            const clone = { foo: 'bar' };
            expect(() => moduleToTest(clone, 'string', 'foo')).to.not.throw();
            expect(clone).to.be.empty();
        });

        it(`finds and delete property and keep other properties`, () => {
            const clone = {
                foo: 'bar',
                another: 'property'
            };

            expect(() => moduleToTest(clone, 'string', 'foo')).to.not.throw();
            expect(clone).to.deep.equal({ another: 'property' });
        });

        it(`accepts all type if undefined`, () => {
            const clone = { foo: 'bar' };
            expect(() => moduleToTest(clone, null, 'foo')).to.not.throw();
            expect(clone).to.be.empty();
        });

        it(`fails if type mismatch`, () => {
            const clone = { foo: 'bar' };
            expect(() => moduleToTest(clone, 'number', 'foo')).to.throw(Error, /^.foo: expected 'bar' to be a number$/);
        });
    });
});
