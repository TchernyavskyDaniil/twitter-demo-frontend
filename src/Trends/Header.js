import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 17px;
  line-height: 20px;
`;

const Option = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Dotted = styled.small`
  margin: 0 5px 0 5px;
`;

export default props => (
  <Container>
    <Title>{props.children}</Title>
    <Dotted>·</Dotted>
    <Option to="/change">Change</Option>
  </Container>
);
