import React from 'react';
import styled from 'styled-components';
import Option from '../Profile/Option';

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

export default props => (
  <Container>
    <Title>{props.children}</Title>
    <Option link="/change">Change</Option>
  </Container>
);
