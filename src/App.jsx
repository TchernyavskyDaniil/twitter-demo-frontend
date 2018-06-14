import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*TODO Переделать?*/}
          <Redirect from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
