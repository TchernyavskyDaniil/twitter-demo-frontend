import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Option = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Dotted = styled.small`
  margin: 0 5px 0 5px;
`;

export default ({ optionLink, optionText }) => (
  <React.Fragment>
    <Dotted>·</Dotted>
    <Option to={optionLink}>{optionText}</Option>
  </React.Fragment>
);
