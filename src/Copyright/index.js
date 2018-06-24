import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Supports = styled.ul`
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

export default () => (
  <Supports>
    <Support>
      <Copyright>© {new Date().getFullYear()} Twitter</Copyright>
    </Support>
    <Support>
      <SupportLink to="/about">About</SupportLink>
    </Support>
    <Support>
      <SupportLink to="/support">Help Center</SupportLink>
    </Support>
    <Support>
      <SupportLink to="/terms">Terms</SupportLink>
    </Support>
    <Support>
      <SupportLink to="/privacy_policy">Privacy policy</SupportLink>
    </Support>
    <Support>
      <SupportLink to="/cookies">Cookies</SupportLink>
    </Support>
    <Support>
      <SupportLink to="/ads">Ads Info</SupportLink>
    </Support>
  </Supports>
);
