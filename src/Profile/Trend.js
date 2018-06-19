import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Hashtag = styled.span`
  color: #1da1f2;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const TrendLink = styled(Link)`
  text-decoration: none;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: #697787;
  padding-top: 4px;
`;

const Tweets = Desc.extend``;

export default ({ trendTag, trendLink, trendDesc, trendTweets }) => (
  <TrendLink to={trendLink}>
    <Hashtag>#{trendTag}</Hashtag>
    <Desc>{trendDesc}</Desc>
    <Tweets>{trendTweets}</Tweets>
  </TrendLink>
);
