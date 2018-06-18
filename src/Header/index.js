import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';
import twitterLogo from './twitter.svg';
import iconHome from './home.svg';
import iconMoments from './moments.svg';
import iconNotifications from './notifications.svg';
import iconMessages from './messages.svg';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid lightgrey;
`;

const Index = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const TwitterLogo = styled.img`
  min-height: 17px;
`;

const Actions = styled.div`
  display: flex;
  min-width: 390px;
  justify-content: space-between;
  align-items: center;
`;

const AvatarLink = styled(Link)`
  width: 26px;
  height: 26px;
  border-color: transparent;

  &:hover {
    border: 1px solid black;
    border-radius: 100px;
    transition: all 0.1s ease-in-out;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const Tweet = styled.button`
  padding: 9px 14px;
  border-radius: 100px;
  background-color: #1da1f2;
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
    transition: all 0.1s ease-in-out;
  }
`;

const BreadCrumbs = styled.ul`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default () => (
  <Header>
    <div className="container">
      <Index>
        <BreadCrumbs>
          <Navigation link="/" text="Home" pic={iconHome} alt="home page" />
          <Navigation
            link="/moments"
            text="Moments"
            pic={iconMoments}
            alt="moments page"
          />
          <Navigation
            link="/notifications"
            text="Notifications"
            pic={iconNotifications}
            alt="notifications page"
          />
          <Navigation
            link="/messages"
            text="Messages"
            pic={iconMessages}
            alt="messages page"
          />
        </BreadCrumbs>
        <TwitterLogo alt="Twitter logo" src={twitterLogo} />
        <Actions>
          <Search />
          <AvatarLink to="/EveryInteract">
            <Avatar src="/img/small-avatar.png" />
          </AvatarLink>
          <Tweet>Tweet</Tweet>
        </Actions>
      </Index>
    </div>
  </Header>
);
