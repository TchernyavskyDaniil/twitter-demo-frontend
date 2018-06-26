import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styledMap from 'styled-map';
import Actions from './Actions';
import iconPinned from './pinned.svg';
import { findUserById } from '../../urlStorage';

const TweetContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarContainer = styled.div`
  padding-right: 10px;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  display: block;
  margin-top: 10px;
  border-radius: 50%;
`;

const ContentContainer = styled.div``;

const Pinned = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 38px;
`;

const PinnedText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  color: #707e88;
  padding-left: 6px;
`;

const PinnedIcon = styled.img``;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

const Person = styled.span``;

const PersonLink = styled(Link)`
  font-size: 16px;
  line-height: 16px;
  color: black;
  text-decoration: none;
  margin-right: 4px;
  cursor: pointer;

  &:hover ${Person} {
    text-decoration: underline;
  }
`;

const Nickname = styled.span`
  padding-left: 2px;
  font-size: 14px;
  line-height: 16px;
  color: #697787;
`;

const Dotted = styled.span`
  color: #697787;
`;

const Date = styled.div`
  padding-left: 2px;
`;

const DateLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  color: #697787;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.p`
  font-size: ${styledMap({
    short: '16px',
    default: '25px',
  })};

  line-height: ${styledMap({
    short: '22px',
    default: '30px',
  })};

  font-weight: 200;
  color: black;
  margin: 2px 0 8px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Hashtag = styled(Link)`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkWebSite = styled.a`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: ${styledMap({
    shortImg: '126px',
    default: '100%',
  })};

  height: ${styledMap({
    shortImg: '126px',
    default: '100%',
  })};

  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const Info = styled.div`
  font-size: 15px;
  line-height: 18px;
  border: 1px solid #e1e8ed;
  border-left: none;
  padding: 6px 2px 4px 9px;
`;

const InfoTitle = styled.span`
  font-weight: 500;
`;

const InfoText = styled.p`
  margin: 0;
  max-height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoLink = styled.a`
  font-weight: normal;
  color: #697787;
  text-decoration: none;
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
  }
`;

const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #e1e8ed;
  }
`;

const Tweet = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const TweetList = styled.div`
  background-color: white;
`;

const tweets = [
  {
    id: 1,
    statusPin: true,
    userAvatar: `${process.env.PUBLIC_URL}/img/small-avatar.png`,
    // person: 'Every Interaction',
    // nickname: 'EveryInteract',
    toDate: '/status/777',
    dateText: '2 Mar 2015',
    tweetText:
      "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    infoSrc: `${process.env.PUBLIC_URL}/img/post.png`,
    infoPromo: false,
    infoTitle: null,
    infoText: null,
    toInfo: null,
    comments: null,
    retweets: 17,
    likes: 47,
    messages: null,
    activeLike: true,
  },
  {
    id: 2,
    statusPin: false,
    userAvatar: `${process.env.PUBLIC_URL}/img/small-avatar.png`,
    // person: 'Every Interaction',
    // nickname: 'EveryInteract',
    toDate: '/status/776',
    dateText: '23h',
    tweetText:
      'Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/',
    infoSrc: null,
    infoPromo: false,
    infoTitle: null,
    infoText: null,
    toInfo: null,
    comments: 1,
    retweets: 4,
    likes: 2,
    messages: null,
    activeLike: false,
  },
  {
    id: 3,
    statusPin: false,
    userAvatar: `${process.env.PUBLIC_URL}/img/small-avatar.png`,
    // person: 'Every Interaction',
    // nickname: 'EveryInteract',
    toDate: '/status/777',
    dateText: 'Nov 18',
    tweetText:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    infoSrc: `${process.env.PUBLIC_URL}/img/promo.png`,
    infoPromo: true,
    infoTitle: 'The Future of Web Fonts',
    infoText:
      'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re',
    toInfo: 'vilijamis.com',
    comments: null,
    retweets: null,
    likes: null,
    messages: null,
    activeLike: false,
  },
];

const tweetMessage = text => {
  let key = 0;
  return text.split(' ').map(textElement => {
    key += 1;
    if (textElement[0] === '#') {
      return (
        <span key={key}>
          <Hashtag to={`/search?q=${textElement}`}>{textElement}</Hashtag>{' '}
        </span>
      );
    } else if (textElement.includes('.com')) {
      return (
        <span key={key}>
          <LinkWebSite href={`https://${textElement}`}>
            {textElement}
          </LinkWebSite>{' '}
        </span>
      );
    }

    return `${textElement} `;
  })
};

export default ({ match }) => (
  <TweetList>
    {tweets.map(tweet => (
      <Tweet key={tweet.id}>
        {tweet.statusPin && (
          <Pinned>
            <PinnedIcon alt="Pinned image" src={iconPinned} />
            <PinnedText>Pinned Tweet</PinnedText>
          </Pinned>
        )}
        <TweetContent>
          <AvatarContainer>
            <Avatar src={tweet.userAvatar} />
          </AvatarContainer>
          <ContentContainer>
            <Title>
              <PersonLink to={`${match.url}`}>
                <Person>{findUserById(match.url.slice(1), 'name')}</Person>
                <Nickname>@{match.url.slice(1)}</Nickname>
              </PersonLink>
              <Date>
                <Dotted> • </Dotted>
                <DateLink to={tweet.toDate}>{tweet.dateText}</DateLink>
              </Date>
            </Title>
            {tweet.tweetText.match(/[^\s]+/g).length >= 16 ? (
              <Message short>{tweetMessage(tweet.tweetText)}</Message>
            ) : (
              <Message>{tweetMessage(tweet.tweetText)}</Message>
            )}
            <ShortInfo>
              {tweet.infoSrc &&
                tweet.infoPromo && (
                  <Image alt="Tweet image" src={tweet.infoSrc} shortImg />
                )}
              {tweet.infoSrc &&
                !tweet.infoPromo && (
                  <Image alt="Tweet image" src={tweet.infoSrc} />
                )}
              {tweet.infoPromo && (
                <Info>
                  {tweet.infoTitle && <InfoTitle>{tweet.infoTitle}</InfoTitle>}
                  {tweet.infoText && (
                    <InfoText>{`${tweet.infoText.substring(
                      0,
                      300,
                    )}...`}</InfoText>
                  )}
                  {tweet.toInfo && <InfoLink>{tweet.toInfo}</InfoLink>}
                </Info>
              )}
            </ShortInfo>
            <Actions
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
              messages={tweet.messages}
              activeLike={tweet.activeLike}
            />
          </ContentContainer>
        </TweetContent>
      </Tweet>
    ))}
  </TweetList>
);
