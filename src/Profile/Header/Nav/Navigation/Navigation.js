import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import home from "./home.svg";
import moments from "./moments.svg";
import notifications from "./notifications.svg";
import messages from "./messages.svg";

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

class Navigation extends Component {
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
    );
  }
}

export default Navigation;
