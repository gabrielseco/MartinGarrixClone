import React from 'react';
import { shallow } from 'enzyme';

import AlbumGrid from './AlbumGrid';

describe('AlbumGrid suite', () => {
  it('should render the AlbumGrid component', () => {
    const component = shallow(<AlbumGrid />);
    expect(component).toBeDefined();
  });
});
