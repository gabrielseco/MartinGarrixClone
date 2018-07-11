// @flow
import React from 'react';
import { Header, Footer, Releases } from 'components';
import { releases } from './../../shared/data';

const Music = () => (
  <React.Fragment>
    <Header />
    <Releases releases={releases.factory()} />
    <Footer />
  </React.Fragment>
);

export default Music;
