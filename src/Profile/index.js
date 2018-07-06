import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import PersonInfo from "./PersonInfo";
import Feeds from "./Feeds";
import Recommendations from "../Recommendations";
import Trends from "../Trends";
import CommonFollowers from "./CommonFollowers";
import Media from "./Media";
import Supports from "../Supports";
import Users from "./Users";
import { api, token } from "../utils";
import iconLocation from "./icons/location.svg";
import iconWeb from "./icons/web.svg";
import iconReg from "./icons/reg.svg";

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
  padding-top: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileSideBar = styled.div`
  max-width: 265px;
  padding: 0 8px 0 12px;
`;

const Person = styled.div`
  margin-bottom: 20px;
`;

const Sidebar = styled.div`
  background-color: white;
  padding: 12px;
  margin-bottom: 10px;
`;

class Profile extends Component {
  state = {
    error: null,
    isLoaded: false,
    userInfo: []
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getUserInfo();
    }
  }

  getUserInfo = () => {
    fetch(`${api}/accounts/${this.props.match.params.id}?access_token=${token}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            userInfo: result
          });
        },
        err => {
          this.setState({
            isLoaded: false,
            error: err
          });
        }
      );
  };

  render() {
    const { error, isLoaded, userInfo } = this.state;
    if (error) {
      return <Redirect to="/error" />;
    } else if (!isLoaded) {
      return <h3>Loading ...</h3>;
    }

    return (
      <main>
        <Helmet>
          <title>
            {userInfo.display_name} (@{userInfo.username})
          </title>
        </Helmet>
        <React.Fragment>
          <Header
            background={userInfo.header_static}
            header={userInfo.avatar_static}
            followers={userInfo.followers_count}
            following={userInfo.following_count}
            tweets={userInfo.statuses_count}
          />
          <Container>
            <div className="container">
              <Info>
                <ProfileSideBar>
                  <Person>
                    <PersonInfo
                      name={userInfo.display_name}
                      verfStatus={false}
                      nickname={userInfo.username}
                      followStatus
                      note={userInfo.note}
                      locAlt="Location"
                      locSrc={iconLocation}
                      loc="London, UK"
                      refAlt="Main WebSite"
                      refSrc={iconWeb}
                      website={userInfo.url}
                      dateAlt="Date registration"
                      dateSrc={iconReg}
                      date={userInfo.created_at}
                    />
                  </Person>
                  <Route component={CommonFollowers} />
                  <Route component={Media} />
                </ProfileSideBar>
                <Switch>
                  <Route
                    exact
                    path={`/${userInfo.id}/following`}
                    render={() => (
                      <div className="col-xs-9">
                        <Users id={userInfo.id} type="following" />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path={`/${userInfo.id}/followers`}
                    render={() => (
                      <div className="col-xs-9">
                        <Users id={userInfo.id} type="followers" />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path={`/${userInfo.id}/likes`}
                    render={() => <h3>This is Likes</h3>}
                  />
                  <Route
                    exact
                    path={`/${userInfo.id}/lists`}
                    render={() => <h3>This is Lists</h3>}
                  />
                  <Route
                    path={`/${userInfo.id}`}
                    render={() => (
                      <React.Fragment>
                        <div className="col-xs-6">
                          <Feeds />
                        </div>
                        <div className="col-xs-3">
                          <Sidebar>
                            <Recommendations userId={userInfo.id} />
                          </Sidebar>
                          <Sidebar>
                            <Trends />
                          </Sidebar>
                          <Supports />
                        </div>
                      </React.Fragment>
                    )}
                  />
                </Switch>
              </Info>
            </div>
          </Container>
        </React.Fragment>
      </main>
    );
  }
}

export default Profile;
