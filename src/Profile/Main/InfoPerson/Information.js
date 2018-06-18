import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import location from "./location.svg";
import web from "./web.svg";
import reg from "./reg.svg";
import check from "./check.svg";

const Profile = styled.div`
  padding-top: 32px;
`;

const ProfileTitle = styled.div``;

const Person = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nickname = styled(Link)`
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Verified = styled.img`
  margin-left: 5px;
  margin-top: 4px;
`;

const Follow = styled.div`
  padding-top: 6px;
`;

const FollowLink = styled(Link)`
  background: transparent;
  padding-left: 0;
  border: none;
  color: #697787;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowState = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: #697787;
  padding-left: 6px;
`;

const ProfileBio = styled.p`
  margin: 0;
  padding-top: 12px;
  font-size: 14px;
  line-height: 20px;
  color: #14171a;
  padding-bottom: 2px;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  padding-top: 5px;
`;

const Info = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 4px;
`;

const InfoIcon = styled.img``;

const InfoText = styled.div`
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  color: #697787;
`;

const Ref = styled.a`
  padding-left: 13px;
  font-size: 14px;
  line-height: 28px;
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  padding-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Action = styled.button`
  color: white;
  padding: 10px 12px;
  border-radius: 100px;
  background-color: #1da1f2;
  min-width: 128px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

class Information extends Component {
  state = {
    info: [
      {
        key: 1,
        icon: location,
        alt: "location",
        text: "London, UK",
        link: null
      },
      {
        key: 2,
        icon: web,
        alt: "web",
        text: null,
        link: "https://everyinteraction.com"
      },
      {
        key: 3,
        icon: reg,
        alt: "date registration",
        text: "Joined May 2008",
        link: null
      }
    ]
  };

  render() {
    return (
      <div className="col-xs-3">
        <Profile>
          <ProfileTitle>
            <Person>
              <Nickname to="/EveryInteract">Every Interaction</Nickname>
              <Verified alt="Verified user" src={check} />
            </Person>
            <Follow>
              <FollowLink to="/EveryInteract">@EveryInteract</FollowLink>
              <FollowState>Follows you</FollowState>
            </Follow>
          </ProfileTitle>
          <ProfileBio>
            UX Design studio focussed problem solving creativity. Design to us
            is how can we make things *work* amazing.
          </ProfileBio>
          <ProfileInfo>
            {this.state.info.map(item => {
              return (
                <Info key={item.key}>
                  {item.icon && <InfoIcon alt={item.alt} src={item.icon} />}
                  {item.link && <Ref href={item.link}>{item.link}</Ref>}
                  <InfoText>{item.text && item.text}</InfoText>
                </Info>
              );
            })}
            <Actions>
              <Action>Tweet to</Action>
              <Action>Message</Action>
            </Actions>
          </ProfileInfo>
        </Profile>
      </div>
    );
  }
}

export default Information;
