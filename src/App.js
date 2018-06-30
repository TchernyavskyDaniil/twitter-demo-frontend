import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile";
import Nav from "./Header";
import OtherUrl from "./Stub";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/moments" component={OtherUrl} />
        <Route exact path="/messages" component={OtherUrl} />
        <Route exact path="/notifications" component={OtherUrl} />
        <Route exact path="/view-all" component={OtherUrl} />
        <Route exact path="/change" component={OtherUrl} />
        <Route exact path="/all-people" component={OtherUrl} />
        <Route exact path="/about" component={OtherUrl} />
        <Route exact path="/support" component={OtherUrl} />
        <Route exact path="/terms" component={OtherUrl} />
        <Route exact path="/privacy-policy" component={OtherUrl} />
        <Route exact path="/cookies" component={OtherUrl} />
        <Route exact path="/ads" component={OtherUrl} />
        <Route exact path="/search" component={OtherUrl} />
        <Route exact path="/error" component={OtherUrl} />
        <Route path="/:user" component={Profile} />
        <Redirect exact from="/" to="/EveryInteract" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
