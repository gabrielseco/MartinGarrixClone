import React from 'react';
import { shallow } from 'enzyme';

import ContactLinks from './ContactLinks';

describe('ContactLinks suite', () => {
  it('should render the ContactLinks component', () => {
    const component = shallow(<ContactLinks />);
    expect(component).toBeDefined();
  });
});
