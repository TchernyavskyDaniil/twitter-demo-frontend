import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
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

const ProfileView = styled.div``;

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
  justify-content: space-between;
  padding-left: 18px;
  list-style: none;
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

const Active = styled(Link)`
  border-bottom: 3px solid #1DA1F2;
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  width: 100%;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  color: #707e88;
`;

const SubText = styled(Text)`
  font-size: 18px;
`;

const Default = styled(Active)`
  border-bottom: 3px solid transparent;
  
  &:hover {
    border-bottom: 3px solid #1DA1F2;
    transition: all .1s ease-in-out;
    
    ${SubText} {
      color: #1DA1F2;
    }
  }
`;

const SubTextActive = styled(SubText)`
  color: #1DA1F2; 
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
  
  &:hover {
    color: white;
    background-color: #1da1f2;
    transition: all .1s ease-in-out;
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
    profileList: [
      {
        key: 1,
        text: "Tweets",
        subText: 8058
      },
      {
        key: 2,
        text: "Following",
        subText: 721
      },
      {
        key: 3,
        text: "Followers",
        subText: 1815
      },
      {
        key: 4,
        text: "Likes",
        subText: 460
      },
      {
        key: 5,
        text: "Lists",
        subText: 2
      }
    ],
    activeIndex: null
  };

  handlerClickActive = index => {
    this.setState({
      activeIndex: index
    })
  };

  render() {
    return (
      <header>
        <Nav />
        <ProfileCanopy alt="Profile Image" src="/img/profile.png" />
        <div className="container">
          <ProfileInfoContainer>
            <ProfileView>
              <AvatarLink to="/profile_images">
                <Avatar src="/img/big-avatar.png"/>
              </AvatarLink>
            </ProfileView>
            <ProfileInfo>
              {
                this.state.profileList.map((item, index) => {
                  return (
                    <Info key={item.key} onClick={() => this.handlerClickActive(index)}>
                      {
                        this.state.activeIndex === index ?
                          <Active to="/EveryInteract">
                            <Text>
                              {item.text}
                            </Text>
                            <SubTextActive>
                              {item.subText}
                            </SubTextActive>
                          </Active>
                          :
                          <Default to="/EveryInteract">
                            <Text>
                              {item.text}
                            </Text>
                            <SubText className="active-text">
                              {item.subText}
                            </SubText>
                          </Default>
                      }
                    </Info>
                  )
                })
              }
            </ProfileInfo>
            <UserActions>
              <Follow>Follow</Follow>
              <Dropdown />
            </UserActions>
          </ProfileInfoContainer>
        </div>
      </header>
    );
  }
}

export default Header;
