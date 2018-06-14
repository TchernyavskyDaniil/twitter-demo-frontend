import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/header";
import MainInformation from "./MainInformation/information";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <Header />
      <MainInformation />
    </div>
  );
};
