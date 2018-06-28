import React from "react";
import { Route } from "react-router-dom";
import Tweets from "./Tweets";
import Tabs from "./Tabs";

export default ({ match }) => (
  <React.Fragment>
    <Route
      exact
      path={`${match.url}`}
      render={() => (
        <React.Fragment>
          <Route path={`${match.url}`} component={Tabs} />
          <Tweets />
        </React.Fragment>
      )}
    />
    <Route
      exact
      path={`${match.url}/with_replies`}
      render={() => (
        <React.Fragment>
          <Route path={`${match.url}`} component={Tabs} />
          <h3> This is With Replies </h3>
        </React.Fragment>
      )}
    />
    <Route
      exact
      path={`${match.url}/media`}
      render={() => (
        <React.Fragment>
          <Route path={`${match.url}`} component={Tabs} />
          <h3> This is Media </h3>
        </React.Fragment>
      )}
    />
  </React.Fragment>
);
