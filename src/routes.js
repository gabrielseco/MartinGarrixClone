// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignUp } from './containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={SignUp} />
  </Switch>
);

export default routes;
