import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Tab from "./Tab";

const Tabs = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  background-color: white;
`;

export default withRouter(({ match }) => (
  <Tabs>
    <Tab to={`${match.url}`}>Tweets</Tab>
    <Tab to={`${match.url}/with-replies`}>Tweets & replies </Tab>
    <Tab to={`${match.url}/media`}>Media</Tab>
  </Tabs>
));
