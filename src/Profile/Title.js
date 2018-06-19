import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TitleLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 8px;
  display: flex;
`;

const TitleIcon = styled.img`
  margin-right: 12px;
  min-width: 15px;
`;

const Text = styled.span`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: #1da1f2;
`;

export default ({ titleSrc, titleText, titleAlt, titleLink }) => (
  <TitleLink to={titleLink}>
    <TitleIcon src={titleSrc} alt={titleAlt} />
    <Text>{titleText}</Text>
  </TitleLink>
);
