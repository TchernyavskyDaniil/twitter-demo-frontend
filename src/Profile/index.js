import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Tweets from './Tweets';
import Recommendation from './Recommendation';
import Option from './Option';
import Trend from './Trend';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import Supports from './Supports';
import iconLocation from './location.svg';
import iconWeb from './web.svg';
import iconReg from './reg.svg';
import iconPeople from './people.svg';

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

const Recommendations = styled.div`
  margin-top: 6px;
  position: relative;
`;

const SideTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Options = styled.div``;

const Title = styled.h3`
  margin: 0;
  font-size: 17px;
  line-height: 20px;
`;

const Sidebar = styled.div`
  background-color: white;
  padding: 12px;
  margin-bottom: 10px;
  min-height: 290px;
`;

const Desc = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  margin: 0;
  margin-left: 8px;
  border-bottom: 1px solid transparent;
`;

const Search = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  &:hover {
    ${Desc} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const Image = styled.img``;

const Trends = styled.div``;

const TrendsContainer = styled.div`
  margin-top: 14px;
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
              <SideTitle>
                <Title>Who to follow</Title>
                <Options>
                  <Option link="/update">Refresh</Option>
                  <Option link="/view_all">View all</Option>
                </Options>
              </SideTitle>
              <Recommendations>
                <Recommendation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-1.png`}
                  name="AppleInsider"
                  status={false}
                  username="appleinsider"
                />
                <Recommendation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-2.png`}
                  name="Creode"
                  status
                  username="Creode"
                />
                <Recommendation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-3.png`}
                  name="Epiphany Search"
                  status={false}
                  username="Epiphanysearch"
                />
              </Recommendations>
              <Search to="/all_people">
                <Image src={iconPeople} />
                <Desc>Find people you know</Desc>
              </Search>
            </Sidebar>
            <Sidebar>
              <Trends>
                <SideTitle>
                  <Title>United Kingdom Trends</Title>
                  <Option link="/change">Change</Option>
                </SideTitle>
                <TrendsContainer>
                  <Trend
                    tag="#BringYourDogToWorkDay"
                    desc={null}
                    count={null}
                  />
                  <Trend tag="#FridayFeeling" desc={null} count="12100" />
                  <Trend
                    tag="#BrexitAnniversary"
                    desc="It’s one year since the UK voted to leave the European Union"
                    count={null}
                  />
                  <Trend tag="HMS Queen Elizabeth" desc={null} count="1036" />
                  <Trend tag="Joe Budden" desc={null} count="1036" />
                  <Trend tag="Trident" desc={null} count="6136" />
                </TrendsContainer>
              </Trends>
            </Sidebar>
            <Supports />
          </div>
        </Info>
      </div>
    </Container>
  </main>
);
