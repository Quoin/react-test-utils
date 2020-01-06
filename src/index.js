import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import dirtyChai from 'dirty-chai';
import enzyme from 'enzyme';
import EnzymeAdapterReact16 from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

import verifyPropertiesImpl from './verify-properties';

chai.use(chaiImmutable);
chai.use(sinonChai);
chai.use(dirtyChai);

enzyme.configure({ adapter: new EnzymeAdapterReact16() });

export { expect } from 'chai';
export { mount, render, shallow } from 'enzyme';
export { sandbox, spy, stub } from 'sinon';

export { default as unexpectedFlow } from './unexpected-flow';
export { default as verifyProperties } from './verify-properties';
