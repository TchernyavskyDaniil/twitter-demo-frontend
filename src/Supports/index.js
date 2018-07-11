import React from "react";
import styled from "styled-components";
import { Support, SupportItem } from "./Support";

const SupportList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 15px 0;
`;

const Copyright = styled.span`
  color: #718290;
`;

export default () => (
  <SupportList>
    <Support>
      <Copyright>© {new Date().getFullYear()} Twitter</Copyright>
    </Support>
    <SupportItem to="/about">About</SupportItem>
    <SupportItem to="/support">Help Center</SupportItem>
    <SupportItem to="/terms">Terms</SupportItem>
    <SupportItem to="/privacy-policy">Privacy policy</SupportItem>
    <SupportItem to="/cookies">Cookies</SupportItem>
    <SupportItem to="/ads">Ads Info</SupportItem>
  </SupportList>
);
