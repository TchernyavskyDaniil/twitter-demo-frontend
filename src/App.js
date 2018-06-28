import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Profile from './Profile';
import Nav from './Header';
import OtherUrl from './OtherUrl';

export default () => (
  <IntlProvider locale="en">
    <BrowserRouter>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/moments" component={OtherUrl} />
          <Route exact path="/messages" component={OtherUrl} />
          <Route exact path="/notifications" component={OtherUrl} />
          <Route exact path="/view_all" component={OtherUrl} />
          <Route exact path="/change" component={OtherUrl} />
          <Route exact path="/all_people" component={OtherUrl} />
          <Route exact path="/about" component={OtherUrl} />
          <Route exact path="/support" component={OtherUrl} />
          <Route exact path="/terms" component={OtherUrl} />
          <Route exact path="/privacy_policy" component={OtherUrl} />
          <Route exact path="/cookies" component={OtherUrl} />
          <Route exact path="/ads" component={OtherUrl} />
          <Route exact path="/search" component={OtherUrl} />
          <Route exact path="/error" component={OtherUrl} />
          <Route path="/:user" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </IntlProvider>
);
