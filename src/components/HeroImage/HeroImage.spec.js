import React from 'react';
import { shallow } from 'enzyme';

import HeroImage from './HeroImage';
import { GET_PUBLIC_PATH } from './../../utils';

const heroFakeProps = {
  images: {
    backgroundImage: `${GET_PUBLIC_PATH('ocean-bg.jpg')}`,
    artboard: {
      url: `${GET_PUBLIC_PATH('martingarrix-khalid-ocean.jpg')}`,
      alt: 'Martin Garrix feat. Khalid - Ocean'
    }
  },
  info: {
    date: 'Jun 15, 2018',
    title: 'Ocean <br/> is out now!',
    artist: 'Martin Garrix feat. Khalid',
    url: '#'
  }
};

describe('HeroImage suite', () => {
  it('should render the HeroImage component', () => {
    const component = shallow(<HeroImage {...heroFakeProps} />);
    expect(component).toBeDefined();
  });
});
