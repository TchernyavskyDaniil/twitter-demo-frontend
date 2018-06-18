import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProfileInfo = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
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

class Stats extends Component {
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
      <div className="col-xs-6">
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
      </div>
    );
  }
}

export default Stats;
