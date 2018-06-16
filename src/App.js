import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Profile from "./Profile/index";

export default () => {
  return (
    <BrowserRouter>
      <div>
        {/*TODO Переделать?*/}
        <Redirect to="/EveryInteract" exact component={Profile} />
        <Route exact path="/EveryInteract" component={Profile} />
      </div>
    </BrowserRouter>
  );
};
