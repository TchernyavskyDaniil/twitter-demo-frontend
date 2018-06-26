import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Profile from './Profile';
import Nav from './Header';
import OtherUrl from './OtherUrl';
import { others } from './urlStorage';

export default () => (
  <IntlProvider locale="en">
    <BrowserRouter>
      <React.Fragment>
        <Nav />
        <Switch>
          {others.map(other => (
            <Route
              key={other.id}
              exact
              path={`${other.to}`}
              component={OtherUrl}
            />
          ))}
          <Route exact path="/about" render={() => <h3>This is About</h3>} />
          <Route path="/:user" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </IntlProvider>
);
