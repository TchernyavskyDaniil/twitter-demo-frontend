import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Stats from "./Stats";
import Button from "../UI/Button";
import iconDotted from "./icons/dotted.svg";

const Background = styled.img`
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const ProfileHeader = styled.div`
  min-height: 59px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ProfileContainer = styled.div`
  max-width: 265px;
  padding: 0 12px 0 12px;
  width: 100%;
`;

const Profile = styled(Link)`
  position: absolute;
  border-radius: 100px;
  left: 0;
  top: -120px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid gainsboro;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 200px;
  height: auto;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-height: 36px;
`;

const Dropdown = styled.div`
  height: 14px;
  width: 4px;
  cursor: pointer;
  padding: 10px;
  margin-left: 15px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 0 2px #ffffff, 0 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-in-out;
  }

  &:before {
    content: "";
    background-image: url(${iconDotted});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Action = styled(Button)`
  padding: 10px 20px;
`;

export default () => (
  <React.Fragment>
    <Background alt="Profile Image" src="/img/profile.png" />
    <div className="container">
      <div className="row">
        <ProfileHeader>
          <ProfileContainer>
            <Profile to="/profile">
              <Avatar src="/img/big-avatar.png" />
            </Profile>
          </ProfileContainer>
          <div className="col-xs-6">
            <Route component={Stats} />
          </div>
          <div className="col-xs-3">
            <UserActions>
              <Action primary>Follow</Action>
              <Dropdown />
            </UserActions>
          </div>
        </ProfileHeader>
      </div>
    </div>
  </React.Fragment>
);
