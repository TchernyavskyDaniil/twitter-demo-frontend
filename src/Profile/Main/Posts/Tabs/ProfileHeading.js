import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Tabs = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
`;

const Tab = styled.li`
  font-size: 18px;
  line-height: 20px;
  padding-right: 35px;
  font-weight: 500;
`;

const TabLink = styled(NavLink)`
  text-decoration: none;

  &.normal {
    color: black;

    &:hover {
      border-bottom: 2px solid black;
    }
  }

  &.active {
    color: #1da1f2;

    &:hover {
      border-bottom: 2px solid #1da1f2;
    }
  }
`;

class ProfileHeading extends Component {
  state = {
    switches: [
      {
        key: 1,
        link: "/EveryInteract",
        text: "Tweets"
      },
      {
        key: 2,
        link: "/EveryInteract/with_replies",
        text: "Tweets & replies"
      },
      {
        key: 3,
        link: "/EveryInteract/media",
        text: "Media"
      }
    ]
  };

  render() {
    return (
      <Tabs>
        {this.state.switches.map(item => {
          return (
            <Tab key={item.key}>
              <TabLink
                to={item.link}
                className="normal"
                activeClassName="active"
                exact
              >
                {item.text}
              </TabLink>
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}

export default ProfileHeading;
