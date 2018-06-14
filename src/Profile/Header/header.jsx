import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Nav/nav";
import bitmap from "./bitmap.jpg";
import dotted from "./dotted.svg";

const ProfileCanopy = styled.img`
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const ProfileInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 265px 1fr 1fr;
  min-height: 59px;
  position: relative;
  align-items: center;
`;

const AvatarContainer = styled.div``;

const Avatar = styled.button`
  position: absolute;
  background-image: url(${"/avatar.svg"});
  border-radius: 100px;
  width: 207px;
  height: 207px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  left: 0;
  top: -120px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 200px;
  justify-content: space-between;
  padding-left: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 21px;
  letter-spacing: 0.01px;
  color: #707e88;
`;

const SubText = Text.extend`
  font-size: 18px;
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
`;

const Dropdown = styled.div`
  height: 14px;
  width: 4px;
  margin-left: 18px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

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
      <ProfileCanopy alt="Profile Image" src={bitmap} />
      <div className="container">
        <ProfileInfoContainer>
          <AvatarContainer>
            <Avatar />
          </AvatarContainer>
          <ProfileInfo>
            <Info>
              <Text>Tweets</Text>
              <SubText>8,058</SubText>
            </Info>
            <Info>
              <Text>Following</Text>
              <SubText>721</SubText>
            </Info>
            <Info>
              <Text>Followers</Text>
              <SubText>1,815</SubText>
            </Info>
            <Info>
              <Text>Likes</Text>
              <SubText>460</SubText>
            </Info>
            <Info>
              <Text>Lists</Text>
              <SubText>2</SubText>
            </Info>
          </ProfileInfo>
          <UserActions>
            <Follow>Follow</Follow>
            <Dropdown />
          </UserActions>
        </ProfileInfoContainer>
      </div>
    </header>
  );
};
