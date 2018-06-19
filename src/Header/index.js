import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Search from '../UI/Search';
import Button from '../UI/Button';
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
  justify-content: space-between;
  align-items: center;
`;

const AvatarLink = styled(Link)`
  width: 26px;
  height: 26px;
  margin: 0 8px 0 8px;
  border: 1px solid transparent;

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
          <Button>Tweet</Button>
        </Actions>
      </Index>
    </div>
  </Header>
);
