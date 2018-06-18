import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Search from "./SearchBar/Search";
import twitterLogo from "./twitter.svg";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const TwitterLogo = styled.img`
  min-height: 17px;
`;

const Actions = styled.div`
  display: flex;
  min-width: 390px;
  justify-content: space-between;
  align-items: center;
`;

const AvatarLink = styled(Link)`
  width: 26px;
  height: 26px;
  border-color: transparent;

  &:hover {
    border: 1px solid black;
    border-radius: 100px;
    transition: all 0.1s ease-in-out;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

const Tweet = styled.button`
  padding: 9px 14px;
  border-radius: 100px;
  background-color: #1da1f2;
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
    transition: all 0.1s ease-in-out;
  }
`;

export default () => {
  return (
    <NavContainer>
      <div className="container">
        <Nav>
          <Navigation />
          <TwitterLogo alt="Twitter logo" src={twitterLogo} />
          <Actions>
            <Search />
            <AvatarLink to="/EveryInteract">
              <Avatar src="/img/small-avatar.png" />
            </AvatarLink>
            <Tweet>Tweet</Tweet>
          </Actions>
        </Nav>
      </div>
    </NavContainer>
  );
};
