import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';
import PersonInfo from './PersonInfo';
import Post from './Tweet';
import Tab from './Tab';
import Actions from './Actions';
import iconLocation from './location.svg';
import iconWeb from './web.svg';
import iconReg from './reg.svg';
import iconPinned from './pinned.svg';

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

export default () => (
  <main>
    <Helmet>
      <title>EveryInteract (@EveryInteract)</title>
    </Helmet>
    <Header />
    <Container>
      <div className="container">
        <Info className="row">
          <div className="col-xs-3">
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
          <div className="col-xs-3" />
        </Info>
      </div>
    </Container>
  </main>
);
