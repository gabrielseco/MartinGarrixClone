import React from 'react';
import { shallow } from 'enzyme';

import Music from './Music';

describe('Music suite', () => {
  it('should render the Music component', () => {
    const component = shallow(<Music />);
    expect(component).toBeDefined();
  });
});
