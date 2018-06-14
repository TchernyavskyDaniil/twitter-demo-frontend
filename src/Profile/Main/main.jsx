import React from "react";
import InfoPerson from "./InfoPerson/information";
import Posts from "./Posts/posts"
import styled from "styled-components";

const Container = styled.div`
  background-color: #E6ECF0;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

export default () => {
  return (
    <div>
      <Container>
        <div className="container">
          <Info>
            <InfoPerson />
            <Posts />
          </Info>
        </div>
      </Container>
    </div>
  )
}
