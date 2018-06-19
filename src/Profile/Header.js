import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Stat from './Stat';
import Button from '../UI/Button';
import iconDotted from './dotted.svg';

const Background = styled.img`
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const ProfileHeader = styled.div`
  min-height: 59px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AvatarLink = styled(Link)`
  position: absolute;
  border-radius: 100px;
  left: 0;
  top: -120px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid gainsboro;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 200px;
  height: auto;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Dropdown = styled.div`
  height: 14px;
  width: 4px;
  cursor: pointer;
  padding: 10px;
  margin-left: 15px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-in-out;
  }

  &:before {
    content: '';
    background-image: url(${iconDotted});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Stats = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 5px;
`;

export default () => (
  <div>
    <Background alt="Profile Image" src="/img/profile.png" />
    <div className="container">
      <div className="row">
        <ProfileHeader>
          <div className="col-xs-3">
            <AvatarLink to="/profile_images">
              <Avatar src="/img/big-avatar.png" />
            </AvatarLink>
          </div>
          <div className="col-xs-6">
            <Stats>
              <Stat link="/EveryInteract" text="Tweets" count="8058" />
              <Stat link="/following" text="Following" count="721" />
              <Stat link="/followers" text="Followers" count="1815" />
              <Stat link="/likes" text="Likes" count="460" />
              <Stat link="/lists" text="Lists" count="2" />
            </Stats>
          </div>
          <div className="col-xs-3">
            <UserActions>
              <Button primary>Follow</Button>
              <Dropdown />
            </UserActions>
          </div>
        </ProfileHeader>
      </div>
    </div>
  </div>
);
