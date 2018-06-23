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

const publicUrl = process.env.PUBLIC_URL;

const users = [
  {
    id: 1,
    name: 'username1',
    src: `${publicUrl}/img/avatar-person-1.png`,
  },
  {
    id: 2,
    name: 'username2',
    src: `${publicUrl}/img/avatar-person-2.png`,
  },
  {
    id: 3,
    name: 'username3',
    src: `${publicUrl}/img/avatar-person-3.png`,
  },
  {
    id: 4,
    name: 'username4',
    src: `${publicUrl}/img/avatar-person-4.png`,
  },
  {
    id: 5,
    name: 'username5',
    src: `${publicUrl}/img/avatar-person-5.png`,
  },
  {
    id: 6,
    name: 'username6',
    src: `${publicUrl}/img/avatar-person-6.png`,
  },
];

export default () => (
  <Common>
    <Title to="/followers" src={iconFollower} alt="follower icon">
      6 Followers you now
    </Title>
    <Followers>
      {users.map(user => (
        <Follower key={user.id}>
          <Link to={`/${user.name}`}>
            <Avatar src={user.src} alt={`avatar ${user.name}`} />
          </Link>
        </Follower>
      ))}
    </Followers>
  </Common>
);
