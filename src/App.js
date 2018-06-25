import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Profile from './Profile';
import Nav from './Header';

export default () => (
  <IntlProvider locale="en">
    <BrowserRouter>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/:id" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </IntlProvider>
);
