import React, { Component } from 'react';
import { Header, HeroImage, LatestReleases, Footer } from 'components';
import { heroProps, latestReleases } from './../../shared/data';

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
        <LatestReleases images={latestReleases.factory()} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
