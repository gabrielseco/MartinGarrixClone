import React from 'react';
import { shallow } from 'enzyme';

import AlbumGrid from './AlbumGrid';
import { latestReleases } from './../../shared/data';

describe('AlbumGrid suite', () => {
  it('should render the AlbumGrid component', () => {
    const component = shallow(<AlbumGrid images={latestReleases.factory()} />);
    expect(component).toBeDefined();
  });
});
