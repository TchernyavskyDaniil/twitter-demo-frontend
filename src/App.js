import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './Profile';
import Nav from './Header';

export default () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/EveryInteract" component={Profile} />
        <Redirect exact from="/" to="/EveryInteract" />
      </Switch>
    </div>
  </BrowserRouter>
);
