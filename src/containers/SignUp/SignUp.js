import React, { Component } from 'react';
import styles from './SignUp.scss';

const GET_PUBLIC_PATH = path => `${process.env.PUBLIC_URL}/${path}`;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={GET_PUBLIC_PATH('logo.png')} alt="Martin Garrix" />
      </div>
    );
  }
}

export default SignUp;
