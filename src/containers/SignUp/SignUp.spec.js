import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp suite', () => {
  it('renders SignUp without any state injected', () => {
    const component = shallow(<SignUp />);
    expect(component).toBeDefined();
  });
});
