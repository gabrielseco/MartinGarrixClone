import React from 'react';
import { render } from 'react-dom';
/* import { HashRouter as Router } from 'react-router-dom';
 */
/* import routes from './routes';
 */ import App from './App';
import './styles/main.scss';

/* const app = (
  <Router>
    <div>{routes()}</div>
  </Router>
); */

render(<App />, document.getElementById('root'));
