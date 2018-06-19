import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import iconFollower from './follower.svg';
import Title from './Title';

const CommonFollowers = styled.div`
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
  margin: 8px 0 0 8px;
`;

const FollowerLink = styled(Link)``;

const FollowerAvatar = styled.img`
  width: 43px;
  background-color: #66757f;
`;

export default () => (
  <CommonFollowers>
    <Title
      titleLink="/followers"
      titleSrc={iconFollower}
      titleAlt="follower icon"
      titleText="6 Followers you now"
    />
    <Followers>
      <Follower>
        <FollowerLink to="/name1">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-1.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
      <Follower>
        <FollowerLink to="/name2">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-2.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
      <Follower>
        <FollowerLink to="/name3">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-3.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
      <Follower>
        <FollowerLink to="/name4">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-4.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
      <Follower>
        <FollowerLink to="/name5">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-5.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
      <Follower>
        <FollowerLink to="/name6">
          <FollowerAvatar
            src={process.env.PUBLIC_URL + '/img/avatar-person-6.png'}
            alt="avatar"
          />
        </FollowerLink>
      </Follower>
    </Followers>
  </CommonFollowers>
);
