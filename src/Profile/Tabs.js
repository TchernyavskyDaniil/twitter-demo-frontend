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

const tabsData = [
  {
    id: 1,
    to: "",
    text: "Tweets",
  },
  {
    id: 2,
    to: "/with_replies",
    text: "Tweets & replies",
  },
  {
    id: 3,
    to: "/media",
    text: "Media",
  },
];

export default () => (
  <Tabs>
    {tabsData.map(tab => (
      <Tab>
        <TabLink to={`/EveryInteract${tab.to}`} activeClassName="active" exact>
          {tab.text}
        </TabLink>
      </Tab>
    ))}
  </Tabs>
);
