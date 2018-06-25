import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const StatList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 5px;
`;

const Stat = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
  cursor: pointer;
`;

const stats = [
  {
    id: 1,
    link: '',
    text: 'Tweets',
    count: 8058,
    active: true,
  },
  {
    id: 2,
    link: '/following',
    text: 'Following',
    count: 721,
    active: false,
  },
  {
    id: 3,
    link: '/followers',
    text: 'Followers',
    count: 1815,
    active: false,
  },
  {
    id: 4,
    link: '/likes',
    text: 'Likes',
    count: 460,
    active: false,
  },
  {
    id: 5,
    link: '/lists',
    text: 'Lists',
    count: 2,
    active: false,
  },
];

const isMainNavActive = (match, location) => {
  const matches = [
    `${match.url}`,
    `${match.url}/with_replies`,
    `${match.url}/media`,
  ];
  return matches.some(el => el === (location && location.pathname));
};

export default ({ match }) => (
  <StatList>
    {stats.map(stat => (
      <Stat key={stat.id}>
        {stat.active ? (
          <InfoLink
            to={`${match.url}${stat.link}`}
            activeClassName="active"
            isActive={isMainNavActive}
          >
            <Text>{stat.text}</Text>
            <Sub>{stat.count}</Sub>
          </InfoLink>
        ) : (
          <InfoLink to={`${match.url}${stat.link}`} activeClassName="active">
            <Text>{stat.text}</Text>
            <Sub>{stat.count}</Sub>
          </InfoLink>
        )}
      </Stat>
    ))}
  </StatList>
);
