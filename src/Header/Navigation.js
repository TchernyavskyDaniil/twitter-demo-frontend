import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Crumb = styled.li`
  cursor: pointer;
`;

const Home = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #667580;
  text-decoration: none;
  padding-bottom: 4px;
  padding-top: 4px;
  border-bottom: 2px solid transparent;
  min-height: 28px;

  &.active {
    border-bottom: 2px solid black;
  }

  &:hover {
    border-bottom: 2px solid black;
    transition: all 0.1s ease-in-out;
  }
`;

const Desc = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  margin-left: 8px;
`;

const Logo = styled.img``;

export default props => (
  <Crumb>
    <Home to={props.to} activeClassName="active" exact>
      <Logo alt={props.alt} src={props.src} />
      <Desc>{props.children}</Desc>
    </Home>
  </Crumb>
);