import React from 'react';
import { GET_PUBLIC_PATH } from './utils';

const App = () => (
  <div>
    <img src={GET_PUBLIC_PATH('logo.png')} alt="logo" />
    <p>Hola Diego Gallu,</p>
  </div>
);

export default App;
