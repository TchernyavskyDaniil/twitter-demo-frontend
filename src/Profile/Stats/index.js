import React from "react";
import styled from "styled-components";
import Stat from "./Stat";

const StatList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 5px;
`;

export default ({ match }) => (
  <StatList>
    <Stat url={match.url} active to="" text="Tweets" count={8058} />
    <Stat url={match.url} to="/following" text="Following" count={721} />
    <Stat url={match.url} to="/followers" text="Followers" count={1815} />
    <Stat url={match.url} to="/likes" text="Likes" count={460} />
    <Stat url={match.url} to="/lists" text="Lists" count={2} />
  </StatList>
);
