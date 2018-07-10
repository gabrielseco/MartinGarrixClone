import React from 'react';
import { shallow } from 'enzyme';

import LatestReleases from './LatestReleases';

describe('LatestReleases suite', () => {
  it('should render the LatestReleases component', () => {
    const component = shallow(<LatestReleases />);
    expect(component).toBeDefined();
  });
});
