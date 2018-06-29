import React from "react";
import { Route } from "react-router-dom";
import Tweets from "./Tweets";
import Tabs from "./Tabs";

export default ({ match }) => (
  <React.Fragment>
    <Tabs />
    <Route exact path={`${match.url}`} component={Tweets} />
    <Route
      exact
      path={`${match.url}/with_replies`}
      render={() => <h3> This is With Replies </h3>}
    />
    <Route
      exact
      path={`${match.url}/media`}
      render={() => <h3> This is Media </h3>}
    />
  </React.Fragment>
);
