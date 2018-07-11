import React from 'react';
import { shallow } from 'enzyme';

import Releases from './Releases';
import { releases } from './../../shared/data';

describe('Releases suite', () => {
  it('should render the Releases component', () => {
    const component = shallow(<Releases releases={releases.factory()} />);
    expect(component).toBeDefined();
  });
});
