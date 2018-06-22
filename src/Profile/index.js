import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Tweet from './Tweet';
import Tab from './Tab';
import Actions from './Actions';
import Recommendtation from './Recomnendation';
import Option from './Option';
import Trend from './Trend';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import Supports from './Supports';
import iconLocation from './location.svg';
import iconWeb from './web.svg';
import iconReg from './reg.svg';
import iconPinned from './pinned.svg';
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

const Tabs = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  background-color: white;
`;

const Tweets = styled.div`
  background-color: white;
`;

const TweetContainer = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
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
                to="/EveryInteract"
                name="Every Interaction"
                verfStatus
                toFollow="/EveryInteract"
                follow="@EveryInteract"
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
            <Tabs>
              <Tab to="/EveryInteract">Tweets</Tab>
              <Tab to="/EveryInteract/with_replies">Tweets & replies</Tab>
              <Tab to="/EveryInteract/media">Media</Tab>
            </Tabs>
            <Tweets>
              <TweetContainer>
                <Tweet
                  statusPin
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                  toPerson="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  toDate="/status/777"
                  dateText="2 Mar 2015"
                  tweetText="We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
                  infoSrc={`${process.env.PUBLIC_URL}/img/post.png`}
                  infoPromo={false}
                  infoAlt="Tweet image"
                  infoTitle={null}
                  infoText={null}
                  toInfo={null}
                />
                <Actions
                  comments={null}
                  retweets="17"
                  likes="47"
                  messages={null}
                  activeLike
                />
              </TweetContainer>
              <TweetContainer>
                <Tweet
                  statusPin={false}
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                  toPerson="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  toDate="/status/776"
                  dateText="23h"
                  tweetText="Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
                  infoSrc={null}
                  infoPromo={null}
                  infoAlt="Tweet image"
                  infoTitle={null}
                  infoText={null}
                  toInfo={null}
                />
                <Actions comments="1" retweets="4" likes="2" messages={null} />
              </TweetContainer>
              <TweetContainer>
                <Tweet
                  statusPin={false}
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                  toPerson="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  toDate="/status/775"
                  dateText="Nov 18"
                  tweetText="Variable web fonts are coming, and will open a world of opportunities for weight use online"
                  infoSrc={`${process.env.PUBLIC_URL}/img/promo.png`}
                  infoPromo
                  infoAlt="Tweet image"
                  infoTitle="The Future of Web Fonts"
                  infoText="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re"
                  toInfo="vilijamis.com"
                />
                <Actions
                  comments={null}
                  retweets={null}
                  likes={null}
                  messages={null}
                />
              </TweetContainer>
            </Tweets>
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
                <Recommendtation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-1.png`}
                  to="/rec1"
                  name="AppleInsider"
                  status={false}
                  username="@appleinsider"
                />
                <Recommendtation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-2.png`}
                  to="/rec2"
                  name="Creode"
                  status
                  username="@Creode"
                />
                <Recommendtation
                  src={`${process.env.PUBLIC_URL}/img/rec-avatar-3.png`}
                  to="/rec3"
                  name="Epiphany Search"
                  status={false}
                  username="@Epiphanysearch"
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
                  <Desc>United Kingdom Trends</Desc>
                  <Option link="/change">Change</Option>
                </SideTitle>
                <TrendsContainer>
                  <Trend
                    tag="#BringYourDogToWorkDay"
                    to="/hashtag/BringYourDogToWorkDay"
                    desc={null}
                    tweets={null}
                  />
                  <Trend
                    tag="#FridayFeeling"
                    to="/hashtag/FridayFeeling"
                    desc={null}
                    tweets="12.1K Tweets"
                  />
                  <Trend
                    tag="#BrexitAnniversary"
                    to="/hashtag/BrexitAnniversary"
                    desc="It’s one year since the UK voted to leave the European Union"
                    tweets={null}
                  />
                  <Trend
                    tag="HMS Queen Elizabeth"
                    to="/search/HMS_Queen_Elizabeth"
                    desc={null}
                    tweets="1,036 Tweets"
                  />
                  <Trend
                    tag="Joe Budden"
                    to="/search/Joe_Budden"
                    desc={null}
                    tweets="1,036 Tweets"
                  />
                  <Trend
                    tag="Trident"
                    to="/search/Trident"
                    desc={null}
                    tweets="6,136 Tweets"
                  />
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
