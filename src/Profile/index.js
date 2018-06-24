import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Tweets from './Tweets';
import Recommendations from '../Recommendations';
import Trends from '../Trends';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import Supports from '../Copyright';
import iconLocation from './location.svg';
import iconWeb from './web.svg';
import iconReg from './reg.svg';

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
  min-height: 290px;
`;

export default () => (
  <main>
    <Helmet>
      <title>EveryInteract (@EveryInteract)</title>
    </Helmet>
    <Header />
    <Container>
      <div className="container">
        <Info>
          <ProfileSideBar>
            <Person>
              <PersonInfo
                name="Every Interaction"
                verfStatus
                nickname="EveryInteract"
                followStatus
                desc="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
                locAlt="Location"
                locSrc={iconLocation}
                loc="London, UK"
                refAlt="Main WebSite"
                refSrc={iconWeb}
                website="https://everyinteraction.com"
                dateAlt="Date registration"
                dateSrc={iconReg}
                date="May 2008"
              />
            </Person>
            <CommonFollowers />
            <Media />
          </ProfileSideBar>
          <div className="col-xs-6">
            <Route path="/EveryInteract" component={Tweets} />
            <Route
              exact
              path="/EveryInteract/following"
              render={() => <h3>This is Following</h3>}
            />
            <Route
              exact
              path="/EveryInteract/followers"
              render={() => <h3>This is Followers</h3>}
            />
            <Route
              exact
              path="/EveryInteract/likes"
              render={() => <h3>This is Likes</h3>}
            />
            <Route
              exact
              path="/EveryInteract/lists"
              render={() => <h3>This is Lists</h3>}
            />
          </div>
          <div className="col-xs-3">
            <Sidebar>
              <Recommendations />
            </Sidebar>
            <Sidebar>
              <Trends />
            </Sidebar>
            <Supports />
          </div>
        </Info>
      </div>
    </Container>
  </main>
);
