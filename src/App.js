import React from 'react';
import { GET_PUBLIC_PATH } from './utils';
import styles from './App.scss';

const App = () => (
  <div className={styles.container}>
    <img src={GET_PUBLIC_PATH('logo.png')} alt="logo" />
    <p>Hola Diego Gallu,</p>
  </div>
);

export default App;
