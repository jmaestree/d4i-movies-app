import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should test', () => {});
});
