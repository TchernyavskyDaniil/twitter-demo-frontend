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
        <title>EveryInteract (@EveryInteract)</title>
      </Helmet>
      <Header />
      <main>
        <Container>
          <div className="container">
            <Info className="row">
              <InfoPerson />
              <Posts />
              <div className="col-xs-3" />
            </Info>
          </div>
        </Container>
      </main>
    </div>
  );
};
