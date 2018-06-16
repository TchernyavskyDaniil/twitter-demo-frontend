import React from "react";
import InfoPerson from "./InfoPerson/Information";
import Posts from "./Posts/Posts";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e6ecf0;
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
  );
};
