import React, { Component } from 'react';
import { Header, HeroImage } from 'components';

import { GET_PUBLIC_PATH } from './../../utils';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const heroProps = {
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
    return (
      <React.Fragment>
        <Header />
        <HeroImage {...heroProps} />
      </React.Fragment>
    );
  }
}

export default Home;
