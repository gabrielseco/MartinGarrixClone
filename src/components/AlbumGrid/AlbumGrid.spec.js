import React from 'react';
import { shallow } from 'enzyme';

import AlbumGrid from './AlbumGrid';
import { images } from 'containers/Home/data';

describe('AlbumGrid suite', () => {
  it('should render the AlbumGrid component', () => {
    const component = shallow(<AlbumGrid images={images.factory()} />);
    expect(component).toBeDefined();
  });
});
