// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, unable to load the page</div>;
  }
  return null;
};

const Home = Loadable({
  loader: () => import('./containers/Home/Home'),
  loading: Loading
});

const Music = Loadable({
  loader: () => import('./containers/Music/Music'),
  loading: Loading
});

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/music" component={Music} />
  </Switch>
);

export default routes;
