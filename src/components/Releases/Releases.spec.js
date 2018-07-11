import React from 'react';
import { shallow } from 'enzyme';

import Releases from './Releases';

describe('Releases suite', () => {
  it('should render the Releases component', () => {
    const component = shallow(<Releases />);
    expect(component).toBeDefined();
  });
});
