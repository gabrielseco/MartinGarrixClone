import 'intersection-observer';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

/* import { loadPolyfills } from './polyfills';
 */
import routes from './routes';
import './styles/main.scss';

const app = (
  <Router>
    <div>{routes()}</div>
  </Router>
);

render(app, document.getElementById('root'));
