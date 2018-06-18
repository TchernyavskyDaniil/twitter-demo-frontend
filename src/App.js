import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile/index";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/EveryInteract" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
