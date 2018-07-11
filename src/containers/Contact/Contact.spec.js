import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './Contact';

describe('Contact suite', () => {
  it('renders Contact without any state injected', () => {
    const component = shallow(<Contact />);
    expect(component).toBeDefined();
  });
});
