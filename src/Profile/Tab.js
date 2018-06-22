import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.li`
  font-size: 18px;
  line-height: 20px;
  padding-right: 35px;
  font-weight: 500;
`;

const Tab = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.active {
    color: #1da1f2;

    &:hover {
      border-bottom: 2px solid #1da1f2;
    }
  }
`;

export default props => (
  <Container>
    <Tab to={props.to} activeClassName="active" exact>
      {props.children}
    </Tab>
  </Container>
);
