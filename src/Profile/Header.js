import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Stat from "./Stat";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";

const Background = styled.img`
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
  height: 100%;
  width: 100%;
  background-color: lightgrey;
`;

const StatList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 200px;
  list-style: none;
  justify-content: flex-start;
  padding: 0 5px;
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

const Action = styled(Button)`
  padding: 10px 20px;
`;

const Header = styled.div`
  padding: 46px 0 0;
  height: 380px;
`;

const isMainNavActive = (match, location) => {
  const matches = [
    `${match.url}`,
    `${match.url}/with-replies`,
    `${match.url}/media`
  ];

  return matches.some(el => el === (location && location.pathname));
};

export default withRouter(
  ({ match, background, header, followers, following, tweets }) => (
    <React.Fragment>
      <Header>
        <Background alt="Profile Image" src={background} />
      </Header>
      <div className="container">
        <div className="row">
          <ProfileHeader>
            <ProfileContainer>
              <Profile to={match.url}>
                <Avatar src={header} />
              </Profile>
            </ProfileContainer>
            <div className="col-xs-6">
              <StatList>
                <Stat
                  url={match.url}
                  active={isMainNavActive}
                  to=""
                  text="Tweets"
                  count={tweets}
                />
                <Stat
                  url={match.url}
                  to="/following"
                  text="Following"
                  count={following}
                />
                <Stat
                  url={match.url}
                  to="/followers"
                  text="Followers"
                  count={followers}
                />
                <Stat url={match.url} to="/likes" text="Likes" count={460} />
                <Stat url={match.url} to="/lists" text="Lists" count={2} />
              </StatList>
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
  )
);
