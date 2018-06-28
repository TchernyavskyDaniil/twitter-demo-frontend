import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Support = styled.li`
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

export const SupportItem = props => (
  <Support>
    <SupportLink to={props.to}>{props.children}</SupportLink>
  </Support>
);
