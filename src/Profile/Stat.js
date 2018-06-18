import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Info = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  color: #707e88;
`;

const Sub = styled(Text)`
  font-size: 18px;
  color: #707e88;
`;

const InfoLink = styled(NavLink)`
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid transparent;

  &.active {
    border-bottom: 3px solid #1da1f2;

    ${Sub} {
      color: #1da1f2;
    }
  }

  &:hover {
    border-bottom: 3px solid #1da1f2;
    transition: all 0.1s ease-in-out;

    ${Sub} {
      color: #1da1f2;
    }
  }
`;

export default ({ link, text, count }) => (
  <Info>
    <InfoLink to={link} activeClassName="active" exact>
      <Text>{text}</Text>
      <Sub>{count}</Sub>
    </InfoLink>
  </Info>
);
