// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default routes;
