import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/header";
import Main from "./Main/main";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
};
