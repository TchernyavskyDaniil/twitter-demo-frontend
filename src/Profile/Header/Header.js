import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import Stats from "./ProfileStats/Stats";
import dotted from "./dotted.svg";

const ProfileCanopyHeader = styled.img`
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const ProfileCanopy = styled.div`
  min-height: 59px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AvatarLink = styled(Link)`
  position: absolute;
  border-radius: 100px;
  width: 207px;
  height: 207px;
  left: 0;
  top: -120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gainsboro;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 83%;
  height: 83%;
`;
const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Follow = styled.button`
  padding: 9px 27px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: white;
    background-color: #1da1f2;
    transition: all 0.1s ease-in-out;
  }
`;

const Dropdown = styled.div`
  height: 14px;
  width: 4px;
  margin-left: 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  &:before {
    content: "";
    background-image: url(${dotted});
    height: 100%;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default () => {
  return (
    <header>
      <Nav />
      <ProfileCanopyHeader alt="Profile Image" src="/img/profile.png" />
      <div className="container">
        <div className="row">
          <ProfileCanopy>
            <div className="col-xs-3">
              <AvatarLink to="/profile_images">
                <Avatar src="/img/big-avatar.png" />
              </AvatarLink>
            </div>
            <Stats />
            <div className="col-xs-3">
              <UserActions>
                <Follow>Follow</Follow>
                <Dropdown />
              </UserActions>
            </div>
          </ProfileCanopy>
        </div>
      </div>
    </header>
  );
};
