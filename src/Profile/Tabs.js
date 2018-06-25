import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = styled.li`
  font-size: 18px;
  line-height: 20px;
  padding-right: 35px;
  font-weight: 500;
`;

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 2px solid black;
  }

  &.active {
    color: #1da1f2;

    &:hover {
      border-bottom: 2px solid #1da1f2;
    }
  }
`;

const Tabs = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  background-color: white;
`;

export default ({ match }) => {
  const tabsData = [
    {
      id: 1,
      to: `${match.url}`,
      text: 'Tweets',
    },
    {
      id: 2,
      to: `${match.url}/with_replies`,
      text: 'Tweets & replies',
    },
    {
      id: 3,
      to: `${match.url}/media`,
      text: 'Media',
    },
  ];

  return (
    <Tabs>
      {tabsData.map(tab => (
        <Tab key={tab.id}>
          <TabLink to={tab.to} activeClassName="active" exact>
            {tab.text}
          </TabLink>
        </Tab>
      ))}
    </Tabs>
  );
};
