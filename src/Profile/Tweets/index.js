import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetList = styled.div`
  background-color: white;
`;

export default ({ tweets }) => (
  <TweetList>
    {tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)}
  </TweetList>
);
