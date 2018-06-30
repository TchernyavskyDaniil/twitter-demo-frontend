import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile";
import Nav from "./Header";
import TemplatePage from "./TemplatePage";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/moments" component={TemplatePage} />
        <Route exact path="/messages" component={TemplatePage} />
        <Route exact path="/notifications" component={TemplatePage} />
        <Route exact path="/view-all" component={TemplatePage} />
        <Route exact path="/change" component={TemplatePage} />
        <Route exact path="/all-people" component={TemplatePage} />
        <Route exact path="/about" component={TemplatePage} />
        <Route exact path="/support" component={TemplatePage} />
        <Route exact path="/terms" component={TemplatePage} />
        <Route exact path="/privacy-policy" component={TemplatePage} />
        <Route exact path="/cookies" component={TemplatePage} />
        <Route exact path="/ads" component={TemplatePage} />
        <Route exact path="/search" component={TemplatePage} />
        <Route exact path="/error" component={TemplatePage} />
        <Route path="/:user" component={Profile} />
        <Redirect exact from="/" to="/EveryInteract" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
