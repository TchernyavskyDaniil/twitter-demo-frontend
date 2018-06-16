import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import home from "./home.svg";
import moments from "./moments.svg";
import notifications from "./notifications.svg";
import messages from "./messages.svg";
import twitterLogo from "./twitter.svg";
import search from "./search.svg";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BreadCrumbs = styled.ul`
  display: flex;
  align-items: center;
  min-width: 395px;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Crumb = styled.li`
  cursor: pointer;
`;

const HomeLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #667580;
  text-decoration: none;
  padding-bottom: 4px;
  padding-top: 4px;

  &.normal {
    border-bottom: 2px solid transparent;
  }

  &.active {
    border-bottom: 2px solid black;
  }

  &:hover {
    border-bottom: 2px solid black;
    transition: all 0.1s ease-in-out;
  }
`;

const CrumbText = styled.span`
  padding-left: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
`;

const CrumbLogo = styled.img``;

const TwitterLogo = styled.img`
  min-height: 17px;
`;

const Actions = styled.div`
  display: flex;
  min-width: 390px;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.form`
  position: relative;
`;

const SearchField = styled.input`
  border-radius: 100px;
  border: 1px solid #e6ecf0;
  background-color: #f5f8fa;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  min-width: 220px;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;

  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;

const SearchBtn = styled.button`
  background-image: url(${search});
  position: absolute;
  height: 19px;
  width: 19px;
  background-color: #f5f8fa;
  background-position: center;
  background-repeat: no-repeat;
  border-color: transparent;
  right: 10px;
  top: 6px;
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
  border-color: #1da1f2;
  background-color: #1da1f2;
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transition: all 0.1s ease-in-out;
  }
`;

class Nav extends Component {
  state = {
    navigation: [
      {
        key: 1,
        link: "/",
        pic: home,
        text: "Home"
      },
      {
        key: 2,
        link: "/EveryInteract/moments",
        pic: moments,
        text: "Moments"
      },
      {
        key: 3,
        link: "/EveryInteract/notifications",
        pic: notifications,
        text: "Notifications"
      },
      {
        key: 4,
        link: "/EveryInteract",
        pic: messages,
        text: "Messages"
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <NavContainer>
          <BreadCrumbs>
            {this.state.navigation.map(item => {
              return (
                <Crumb key={item.key}>
                  <HomeLink
                    to={item.link}
                    className="normal"
                    activeClassName="active"
                    exact
                  >
                    <CrumbLogo alt={item.text} src={item.pic} />
                    <CrumbText>{item.text}</CrumbText>
                  </HomeLink>
                </Crumb>
              );
            })}
          </BreadCrumbs>
          <TwitterLogo alt="Twitter logo" src={twitterLogo} />
          <Actions>
            <Search action="/search">
              <SearchField
                type="text"
                id="search-input"
                placeholder="Search Twitter"
              />
              <SearchBtn />
            </Search>
            <AvatarLink to="/EveryInteract">
              <Avatar src="/img/small-avatar.png" />
            </AvatarLink>
            <Tweet>Tweet</Tweet>
          </Actions>
        </NavContainer>
      </div>
    );
  }
}

export default Nav;
