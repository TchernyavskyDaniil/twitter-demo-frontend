import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SupportList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 15px 0;
`;

const Support = styled.li`
  display: inline-block;
  padding-right: 8px;
  font-size: 13px;
  line-height: 18px;
`;

const SupportLink = styled(Link)`
  text-decoration: none;
  color: #718290;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span`
  color: #718290;
`;

const supports = [
  {
    id: 1,
    to: '/about',
    text: 'About',
  },
  {
    id: 2,
    to: '/support',
    text: 'Support',
  },
  {
    id: 3,
    to: '/terms',
    text: 'Terms',
  },
  {
    id: 4,
    to: '/privacy_policy',
    text: 'Privacy policy',
  },
  {
    id: 5,
    to: '/cookies',
    text: 'Cookies',
  },
  {
    id: 6,
    to: '/ads',
    text: 'Ads Info',
  },
];

export default () => (
  <SupportList>
    <Support>
      <Copyright>© {new Date().getFullYear()} Twitter</Copyright>
    </Support>
    {supports.map(sup => (
      <Support key={sup.id}>
        <SupportLink to={sup.to}>{sup.text}</SupportLink>
      </Support>
    ))}
  </SupportList>
);
