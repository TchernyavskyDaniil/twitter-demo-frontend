import React from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet';
import Tab from './Tab';
import Actions from './Actions';
import iconPinned from './pinned.svg';

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

const Tabs = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  background-color: white;
`;

export default () => (
  <React.Fragment>
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
          nickname="EveryInteract"
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
          nickname="EveryInteract"
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
          person="Every Interaction"
          nickname="EveryInteract"
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
        <Actions comments={null} retweets={null} likes={null} messages={null} />
      </TweetContainer>
    </Tweets>
  </React.Fragment>
);
