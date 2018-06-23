import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Hashtag = styled.span`
  color: #1da1f2;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
`;

const TrendLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding-bottom: 10px;
  min-height: 20px;

  &:hover {
    ${Hashtag} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Desc = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: #697787;
`;

const Tweets = Desc.extend``;

export default ({ tag, desc, count }) => (
  <TrendLink to={`/search?q=${tag}`}>
    <Hashtag>{tag}</Hashtag>
    <Desc>{desc}</Desc>
    {count > 0 && (
      <Tweets>
        <FormattedNumber value={count} />
        {count > 1 ? ' Tweets' : ' Tweet'}
      </Tweets>
    )}
  </TrendLink>
);
