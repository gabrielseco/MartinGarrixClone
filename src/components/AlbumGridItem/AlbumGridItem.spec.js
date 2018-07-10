import React from 'react';
import { shallow } from 'enzyme';

import AlbumGridItem from './AlbumGridItem';

describe('AlbumGridItem suite', () => {
  it('should render the AlbumGridItem component', () => {
    const component = shallow(<AlbumGridItem />);
    expect(component).toBeDefined();
  });
});
