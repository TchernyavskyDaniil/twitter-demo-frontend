import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Crumb = styled.li`
  cursor: pointer;
`;

const HomeLink = styled(NavLink)`
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

const CrumbText = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  margin-left: 8px;
`;

const CrumbLogo = styled.img``;

export default ({ link, altName, pic, text }) => (
  <Crumb>
    <HomeLink to={link} activeClassName="active" exact>
      <CrumbLogo alt={altName} src={pic} />
      <CrumbText>{text}</CrumbText>
    </HomeLink>
  </Crumb>
);
