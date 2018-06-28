import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Feeds from './Feeds';
import Recommendations from '../Recommendations';
import Trends from '../Trends';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import Supports from '../Supports';
import findUser from '../utils';
import iconLocation from './icons/location.svg';
import iconWeb from './icons/web.svg';
import iconReg from './icons/reg.svg';

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

export default ({ match }) => (
  <main>
    <Helmet>
      <title>
        {findUser(match.params.user, 'name')} (@{match.params.user})
      </title>
    </Helmet>
    <Header />
    <Container>
      <div className="container">
        <Info>
          <ProfileSideBar>
            <Person>
              <PersonInfo
                name={findUser(match.params.user, 'name')}
                verfStatus
                nickname={match.url}
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
            <Route component={CommonFollowers} />
            <Route component={Media} />
          </ProfileSideBar>
          <div className="col-xs-6">
            <Route path={`${match.url}`} component={Feeds} />
            <Route
              exact
              path={`${match.url}/following`}
              render={() => <h3>This is Following</h3>}
            />
            <Route
              exact
              path={`${match.url}/followers`}
              render={() => <h3>This is Followers</h3>}
            />
            <Route
              exact
              path={`${match.url}/likes`}
              render={() => <h3>This is Likes</h3>}
            />
            <Route
              exact
              path={`${match.url}/lists`}
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
