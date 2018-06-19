import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Post from './Tweet';
import Tab from './Tab';
import Actions from './Actions';
import Recommendtation from './Recomnendation';
import Option from './Option';
import Trend from './Trend';
import CommonFollowers from './CommonFollowers';
import Media from './Media';
import iconLocation from './location.svg';
import iconWeb from './web.svg';
import iconReg from './reg.svg';
import iconPinned from './pinned.svg';
import iconPeople from './people.svg';

const Container = styled.div`
  background-color: #e6ecf0;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
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

const Posts = styled.div`
  background-color: white;
`;

const PostContainer = styled.section`
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

const Desc = styled.h3`
  margin: 0;
  font-size: 17px;
  line-height: 20px;
`;

const Sidebar = styled.div`
  background-color: white;
  padding: 12px 16px;
  margin-bottom: 10px;
  min-height: 290px;
`;

const SearchText = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  margin: 0;
  margin-left: 8px;
  border-bottom: 1px solid transparent;
`;

const SearchLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  &:hover {
    ${SearchText} {
      border-bottom: 1px solid #1da1f2;
    }
  }
`;

const SearchIcon = styled.img``;

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
          <div className="col-xs-3">
            <Person>
              <PersonInfo
                linkPerson="/EveryInteract"
                name="Every Interaction"
                verfStatus
                linkFollow="/EveryInteract"
                follow="@EveryInteract"
                followStatus
                desc="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
                locAlt="Location"
                locSrc={iconLocation}
                loc="London, UK"
                refAlt="Main WebSite"
                refSrc={iconWeb}
                mainLink="https://everyinteraction.com"
                dateAlt="Date registration"
                dateSrc={iconReg}
                date="May 2008"
              />
            </Person>
            <CommonFollowers />
            <Media />
          </div>
          <div className="col-xs-6">
            <Tabs>
              <Tab tabLink="/EveryInteract" text="Tweets" />
              <Tab
                tabLink="/EveryInteract/with_replies"
                text="Tweets & replies"
              />
              <Tab tabLink="/EveryInteract/media" text="Media" />
            </Tabs>
            <Posts>
              <PostContainer>
                <Post
                  statusPin
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={process.env.PUBLIC_URL + '/img/small-avatar.png'}
                  personLink="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  dateLink="/status/777"
                  dateText="2 Mar 2015"
                  tweetText="We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
                  infoSrc={process.env.PUBLIC_URL + '/img/post.png'}
                  infoPromo={false}
                  infoAlt="Tweet image"
                  infoTitle={null}
                  infoText={null}
                  infoLink={null}
                />
                <Actions
                  comments={null}
                  retweets="17"
                  likes="47"
                  messages={null}
                  activeLike
                />
              </PostContainer>
              <PostContainer>
                <Post
                  statusPin={false}
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={process.env.PUBLIC_URL + '/img/small-avatar.png'}
                  personLink="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  dateLink="/status/776"
                  dateText="23h"
                  tweetText="Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
                  infoSrc={null}
                  infoPromo={null}
                  infoAlt="Tweet image"
                  infoTitle={null}
                  infoText={null}
                  infoLink={null}
                />
                <Actions comments="1" retweets="4" likes="2" messages={null} />
              </PostContainer>
              <PostContainer>
                <Post
                  statusPin={false}
                  altPin="pinned"
                  srcPin={iconPinned}
                  pin="Pinned Tweet"
                  userAvatar={process.env.PUBLIC_URL + '/img/small-avatar.png'}
                  personLink="/EveryInteract"
                  person="Every Interaction"
                  nickname="@EveryInteract"
                  dateLink="/status/775"
                  dateText="Nov 18"
                  tweetText="Variable web fonts are coming, and will open a world of opportunities for weight use online"
                  infoSrc={process.env.PUBLIC_URL + '/img/promo.png'}
                  infoPromo
                  infoAlt="Tweet image"
                  infoTitle="The Future of Web Fonts"
                  infoText="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…"
                  infoLink="vilijamis.com"
                />
                <Actions
                  comments={null}
                  retweets={null}
                  likes={null}
                  messages={null}
                />
              </PostContainer>
            </Posts>
          </div>
          <div className="col-xs-3">
            <Sidebar>
              <SideTitle>
                <Desc>Who to follow</Desc>
                <Options>
                  <Option optionText="Refresh" optionLink="/update" />
                  <Option optionText="View all" optionLink="/view_all" />
                </Options>
              </SideTitle>
              <Recommendations>
                <Recommendtation
                  recSrc={process.env.PUBLIC_URL + '/img/rec-avatar-1.png'}
                  recLink="/rec1"
                  recFull="AppleInsider"
                  recStatus={false}
                  recUser="@appleinsider"
                />
                <Recommendtation
                  recSrc={process.env.PUBLIC_URL + '/img/rec-avatar-2.png'}
                  recLink="/rec2"
                  recFull="Creode"
                  recStatus
                  recUser="@Creode"
                />
                <Recommendtation
                  recSrc={process.env.PUBLIC_URL + '/img/rec-avatar-3.png'}
                  recLink="/rec3"
                  recFull="Epiphany Search"
                  recStatus={false}
                  recUser="@Epiphanysearch"
                />
              </Recommendations>
              <SearchLink to="/all_people">
                <SearchIcon src={iconPeople} />
                <SearchText>Find people you know</SearchText>
              </SearchLink>
            </Sidebar>
            <Sidebar>
              <Trends>
                <SideTitle>
                  <Desc>United Kingdom Trends</Desc>
                  <Option optionText="Change" optionLink="/change" />
                </SideTitle>
                <TrendsContainer>
                  <Trend
                    trendTag="#BringYourDogToWorkDay"
                    trendLink="/hashtag/BringYourDogToWorkDay"
                    trendDesc={null}
                    trendTweets={null}
                  />
                  <Trend
                    trendTag="#FridayFeeling"
                    trendLink="/hashtag/FridayFeeling"
                    trendDesc={null}
                    trendTweets="12.1K Tweets"
                  />
                  <Trend
                    trendTag="#BrexitAnniversary"
                    trendLink="/hashtag/BrexitAnniversary"
                    trendDesc="It’s one year since the UK voted to leave the European Union"
                    trendTweets={null}
                  />
                  <Trend
                    trendTag="HMS Queen Elizabeth"
                    trendLink="/search/HMS_Queen_Elizabeth"
                    trendDesc={null}
                    trendTweets="1,036 Tweets"
                  />
                  <Trend
                    trendTag="Joe Budden"
                    trendLink="/search/Joe_Budden"
                    trendDesc={null}
                    trendTweets="1,036 Tweets"
                  />
                  <Trend
                    trendTag="Trident"
                    trendLink="/search/Trident"
                    trendDesc={null}
                    trendTweets="6,136 Tweets"
                  />
                </TrendsContainer>
              </Trends>
            </Sidebar>
          </div>
        </Info>
      </div>
    </Container>
  </main>
);
