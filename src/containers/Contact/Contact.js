import React, { Component } from 'react';
import { Header, Footer, ContactLinks } from 'components';
import { withStyle } from 'behaviours';
import { GET_PUBLIC_PATH } from './../../utils';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ContactLinks />
        <Footer />
      </React.Fragment>
    );
  }
}

export { Contact };

export default withStyle({
  styles: {
    backgroundImage: `url(${GET_PUBLIC_PATH('contact-bg.jpg')})`,
    backgroundColor: '#0c0c0c',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  selector: 'body'
})(Contact);
