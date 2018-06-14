import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Profile from "./Profile/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*TODO Переделать?*/}
          <Route exact path="/" render={() => <Redirect to="/EveryInteract" />} />
          <Profile/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
