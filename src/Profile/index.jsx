import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./Header/Nav"

export default () => {
  return (
    <div>
      <Helmet>
        <title>
          Profile Page
        </title>
      </Helmet>
      <Nav />
    </div>
  )
}
