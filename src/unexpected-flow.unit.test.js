import {
    expect
} from './index';

import moduleToTest from './unexpected-flow';

const DEFAULT_ERROR = new RegExp(`^${moduleToTest.DEFAULT_ERROR}$`);

describe(`src/unexpected-flow`, () => {
    it(`exports a function with 2 params`, () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(2);
    });

    it(`has property 'DEFAULT_ERROR'`, () => {
        expect(moduleToTest).to.have.property('DEFAULT_ERROR');
        expect(moduleToTest.DEFAULT_ERROR).to.be.a('string');
    });

    describe(`call()`, () => {
        it(`calls without params`, () => {
            expect(() => moduleToTest()).to.throw(Error, DEFAULT_ERROR);
        });

        it(`calls with message, but without data`, () => {
            expect(() => moduleToTest('some message')).to.throw(Error, DEFAULT_ERROR);
        });

        it(`calls without message, but with data`, () => {
            expect(() => moduleToTest(null, 'a')).to.throw(Error, DEFAULT_ERROR);
        });

        it(`calls with message and data`, () => {
            expect(() => moduleToTest('some message', 'a')).to.throw(Error, /^some message$/);
        });
    });
});
