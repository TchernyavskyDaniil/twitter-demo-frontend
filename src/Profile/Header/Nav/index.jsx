import React, { Component } from "react";
import styled from "styled-components";
import home from "./home.svg";
import moments from "./moments.svg";
import notifications from "./notifications.svg";
import messages from "./messages.svg";
import twitterLogo from "./twitter.svg";
import search from "./search.svg";
import avatar from "./avatar.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
`;

const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1px;
`;

const CrumbText = styled.span`
  padding-left: 6px;
`;

const Moments = Home.extend``;

const Notifications = Home.extend``;

const Messages = Home.extend``;

const CrumbSvg = styled.img`

`;

const TwitterSvg = styled.img`
  min-height: 17px;
`;

const ActionsContainer = styled.div`
  display: flex;
  min-width: 390px;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: 100px;
  border: 1px solid #E6ECF0;
  background-color: #F5F8FA;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  min-width: 220px;
`;

const Search = styled.button`
  background-image: url(${search});
  position: absolute;
  height: 18px;
  width: 18px;
  background-position: center;
  background-repeat: no-repeat;
  border-color: transparent;
  background-color: transparent;
  right: 10px;
  top: 9px;
`;

const Avatar = styled.button`
  background-image: url(${avatar});
  width: 26px;
  height: 26px;
  background-repeat: no-repeat;
  background-position: center;
  border-color: transparent;
  background-color: transparent;
`;

const Tweet = styled.button`
  padding: 9px 14px;
  border-radius: 100px;
  border-color: #1DA1F2;
  background-color: #1DA1F2;
  color: white;
`;

export default () => {
  return (
    <Nav>
      <BreadCrumbs>
        <Home>
          <CrumbSvg alt="Home" src={home} />
          <CrumbText>
            Home
          </CrumbText>
        </Home>
        <Moments>
          <CrumbSvg alt="Moments" src={moments} />
          <CrumbText>
            Moments
          </CrumbText>
        </Moments>
        <Notifications>
          <CrumbSvg alt="Notifications" src={notifications} />
          <CrumbText>
            Notifications
          </CrumbText>
        </Notifications>
        <Messages>
          <CrumbSvg alt="Messages" src={messages} />
          <CrumbText>
            Messages
          </CrumbText>
        </Messages>
      </BreadCrumbs>
      <TwitterSvg alt="Twitter logo" src={twitterLogo} />
      <ActionsContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            id="search-input"
            placeholder="Search Twitter"
          />
          <Search />
        </SearchContainer>
        <Avatar />
        <Tweet>
          Tweet
        </Tweet>
      </ActionsContainer>
    </Nav>
  );
}
