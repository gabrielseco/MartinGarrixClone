import React, { Component } from 'react';
import { Header, HeroImage, LatestReleases, Footer } from 'components';
import { heroProps, images } from './data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HeroImage {...heroProps} />
        <LatestReleases images={images.factory()} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
