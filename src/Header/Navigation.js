import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import iconHome from './home.svg';
import iconMoment from './moment.svg';
import iconNotification from './notification.svg';
import iconMessage from './messages.svg';

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

const BreadCrumbs = styled.ul`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const navigation = [
  {
    id: 1,
    link: '/',
    src: iconHome,
    text: 'Home',
  },
  {
    id: 2,
    link: '/moments',
    src: iconMoment,
    text: 'Moments',
  },
  {
    id: 3,
    link: '/notifications',
    src: iconNotification,
    text: 'Notifications',
  },
  {
    id: 4,
    link: '/messages',
    src: iconMessage,
    text: 'Messages',
  },
];

export default () => (
  <BreadCrumbs>
    {navigation.map(nav => (
      <Crumb key={nav.id}>
        <Home to={nav.link} activeClassName="active" exact>
          <Logo alt={nav.text} src={nav.src} />
          <Desc>{nav.text}</Desc>
        </Home>
      </Crumb>
    ))}
  </BreadCrumbs>
);
