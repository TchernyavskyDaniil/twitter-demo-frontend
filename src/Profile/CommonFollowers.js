import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconFollower from './follower.svg';
import Title from './Title';

const Common = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Followers = styled.ul`
  margin: -8px 0 0 -8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const Follower = styled.li`
  list-style: none;
  margin: 5px 0 0 5px;
`;

const Avatar = styled.img`
  width: 48px;
  background-color: #66757f;

  &:hover {
    box-shadow: 0 1px 2px 0 black;
  }
`;

export default () => (
  <Common>
    <Title to="/followers" src={iconFollower} alt="follower icon">
      6 Followers you now
    </Title>
    <Followers>
      <Follower>
        <Link to="/name1">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-1.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/name2">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-2.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/name3">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-3.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/name4">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-4.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/name5">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-5.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/name6">
          <Avatar
            src={`${process.env.PUBLIC_URL}/img/avatar-person-6.png`}
            alt="avatar"
          />
        </Link>
      </Follower>
    </Followers>
  </Common>
);
