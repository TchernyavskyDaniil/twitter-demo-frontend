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

const StLink = styled(Link)``;

const publicUrl = process.env.PUBLIC_URL;

const users = [
  {
    id: 1,
    name: '/mirhasanjamil75',
    src: `${publicUrl}/img/avatar-person-1.png`,
  },
  {
    id: 2,
    name: '/alexdown',
    src: `${publicUrl}/img/avatar-person-2.png`,
  },
  {
    id: 3,
    name: '/TerryCoopey',
    src: `${publicUrl}/img/avatar-person-3.png`,
  },
  {
    id: 4,
    name: '/NiamhKeaneB_ID',
    src: `${publicUrl}/img/avatar-person-4.png`,
  },
  {
    id: 5,
    name: '/venglarcik',
    src: `${publicUrl}/img/avatar-person-5.png`,
  },
  {
    id: 6,
    name: '/katzedsgn',
    src: `${publicUrl}/img/avatar-person-6.png`,
  },
];

export default ({ match }) => (
  <Common>
    <Title
      to={`${match.url}/common_followers`}
      src={iconFollower}
      alt="follower icon"
    >
      {users[users.length - 1].id} Followers you now
    </Title>
    <Followers>
      {users.map(user => (
        <React.Fragment key={user.id}>
          {user.id <= 10 && (
            <Follower>
              <StLink to={user.name}>
                <Avatar src={user.src} alt={`avatar ${user.name.slice(1)}`} />
              </StLink>
            </Follower>
          )}
        </React.Fragment>
      ))}
    </Followers>
  </Common>
);
