import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Announcing = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Desc = styled.h3`
  font-size: 18px;
`;

const Back = styled(Link)`
  font-size: 18px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ match }) => (
  <Announcing>
    <Desc> You are on the {match.url.slice(1)} page </Desc>
    <Back to="/"> Home page </Back>
  </Announcing>
);
