import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header/Header";
import InfoPerson from "./Main/InfoPerson/Information";
import Posts from "./Main/Posts/Posts";

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
      <Helmet>
        <title>Profile Page</title>
      </Helmet>
      <Header />
      <main>
        <Container>
          <div className="container">
            <Info>
              <InfoPerson />
              <Posts />
            </Info>
          </div>
        </Container>
      </main>
    </div>
  );
};
