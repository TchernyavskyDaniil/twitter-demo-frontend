import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Tweet from '../Tweet';
import Tabs from './Tabs';
import Actions from './Actions';

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

export default () => (
  <React.Fragment>
    <Route
      exact
      path="/EveryInteract"
      render={() => (
        <React.Fragment>
          <Tabs />
          <Tweets>
            <TweetContainer>
              <Tweet
                statusPin
                userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                person="Every Interaction"
                nickname="EveryInteract"
                toDate="/status/777"
                dateText="2 Mar 2015"
                tweetText="We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
                infoSrc={null}
                infoPromo={false}
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
                userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                person="Every Interaction"
                nickname="EveryInteract"
                toDate="/status/776"
                dateText="23h"
                tweetText="Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
                infoSrc={null}
                infoPromo={false}
                infoTitle={null}
                infoText={null}
                toInfo={null}
              />
              <Actions comments="1" retweets="4" likes="2" messages={null} />
            </TweetContainer>
            <TweetContainer>
              <Tweet
                statusPin={false}
                userAvatar={`${process.env.PUBLIC_URL}/img/small-avatar.png`}
                person="Every Interaction"
                nickname="EveryInteract"
                toDate="/status/775"
                dateText="Nov 18"
                tweetText="Variable web fonts are coming, and will open a world of opportunities for weight use online"
                infoSrc={`${process.env.PUBLIC_URL}/img/promo.png`}
                infoPromo
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
        </React.Fragment>
      )}
    />
    <Route
      exact
      path="/EveryInteract/with_replies"
      render={() => (
        <React.Fragment>
          <Tabs />
          <h3> This is With Replies </h3>
        </React.Fragment>
      )}
    />
    <Route
      exact
      path="/EveryInteract/media"
      render={() => (
        <React.Fragment>
          <Tabs />
          <h3> This is With Replies </h3>
        </React.Fragment>
      )}
    />
  </React.Fragment>
);
