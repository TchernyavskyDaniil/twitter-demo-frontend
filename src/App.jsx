import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*TODO Переделать?*/}
          <Switch>
            <Route exact path="/EveryInteract" component={Profile} />
            <Redirect from="/" to="/EveryInteract"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
