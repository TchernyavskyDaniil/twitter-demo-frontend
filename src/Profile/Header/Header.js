import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";
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
`;

const ProfileView = styled.div`
  flex-basis: 25%;
  max-width: 25%;
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

const ProfileInfo = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  flex-basis: 50%;
  max-width: 50%;
  justify-content: flex-start;
  padding: 0;
`;

const Info = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 75px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  color: #707e88;
`;

const Sub = styled(Text)`
  font-size: 18px;
  color: #707e88;
`;

const InfoLink = styled(NavLink)`
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  width: 100%;

  &.normal {
    border-bottom: 3px solid transparent;
  }

  &.active {
    border-bottom: 3px solid #1da1f2;

    ${Sub} {
      color: #1da1f2;
    }
  }

  &:hover {
    border-bottom: 3px solid #1da1f2;
    transition: all 0.1s ease-in-out;

    ${Sub} {
      color: #1da1f2;
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 25%;
  max-width: 25%;
`;

const Follow = styled.button`
  padding: 9px 27px;
  border-radius: 100px;
  border: 1px solid #1da1f2;
  color: #1da1f2;
  cursor: pointer;

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

class Header extends Component {
  state = {
    profiles: [
      {
        key: 1,
        text: "Tweets",
        link: "/EveryInteract",
        sub: 8058
      },
      {
        key: 2,
        text: "Following",
        link: "/following",
        sub: 721
      },
      {
        key: 3,
        text: "Followers",
        link: "/followers",
        sub: 1815
      },
      {
        key: 4,
        text: "Likes",
        link: "/likes",
        sub: 460
      },
      {
        key: 5,
        text: "Lists",
        link: "/lists",
        sub: 2
      }
    ]
  };

  render() {
    return (
      <header>
        <Nav />
        <ProfileCanopyHeader alt="Profile Image" src="/img/profile.png" />
        <div className="container">
          <ProfileCanopy>
            <ProfileView>
              <AvatarLink to="/profile_images">
                <Avatar src="/img/big-avatar.png" />
              </AvatarLink>
            </ProfileView>
            <ProfileInfo>
              {this.state.profiles.map(item => {
                return (
                  <Info key={item.key}>
                    <InfoLink
                      to={item.link}
                      className="normal"
                      activeClassName="active"
                      exact
                    >
                      <Text>{item.text}</Text>
                      <Sub>{item.sub}</Sub>
                    </InfoLink>
                  </Info>
                );
              })}
            </ProfileInfo>
            <UserActions>
              <Follow>Follow</Follow>
              <Dropdown />
            </UserActions>
          </ProfileCanopy>
        </div>
      </header>
    );
  }
}

export default Header;
