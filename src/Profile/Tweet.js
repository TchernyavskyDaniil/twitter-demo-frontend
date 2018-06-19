import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styledMap from 'styled-map';

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

const PersonLink = styled(Link)`
  font-size: 16px;
  line-height: 16px;
  color: black;
  text-decoration: none;
`;

const Person = styled.div`
  margin-right: 4px;
  cursor: pointer;

  &:hover ${PersonLink} {
    text-decoration: underline;
  }
`;

const Nickname = styled.span`
  padding-left: 2px;
  font-size: 14px;
  line-height: 16px;
  color: #697787;
`;

const Date = styled.div`
  padding-left: 2px;

  &:before {
    content: '•';
    color: #697787;
  }
`;

const DateLink = styled(Link)`
  padding-left: 2px;
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
  padding-bottom: 2px;
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

// Ты просил сделать имутабельную. Но ты ушел после 23:00, из-за этого я хз верно ли сделал

const tweetMessage = text => {
  return text.split(' ').map(textElement => {
    if (textElement[0] === '#') {
      return (
        <span>
          <Hashtag to={`/${textElement}`}>{textElement}</Hashtag>{' '}
        </span>
      );
    } else if (textElement.includes('.com')) {
      return (
        <span>
          <LinkWebSite href={`https://${textElement}`}>
            {textElement}
          </LinkWebSite>{' '}
        </span>
      );
    }
    return `${textElement} `;
  });
};

export default ({
  statusPin,
  altPin,
  srcPin,
  pin,
  userAvatar,
  personLink,
  person,
  nickname,
  dateLink,
  dateText,
  tweetText,
  infoSrc,
  infoPromo,
  infoAlt,
  infoTitle,
  infoText,
  infoLink,
}) => (
  <React.Fragment>
    {statusPin && (
      <Pinned>
        <PinnedIcon alt={altPin} src={srcPin} />
        <PinnedText>{pin}</PinnedText>
      </Pinned>
    )}
    <TweetContent>
      <AvatarContainer>
        <Avatar src={userAvatar} />
      </AvatarContainer>
      <ContentContainer>
        <Title>
          <Person>
            <PersonLink to={personLink}>{person}</PersonLink>
            <Nickname>{nickname}</Nickname>
          </Person>
          <Date>
            <DateLink to={dateLink}>{dateText}</DateLink>
          </Date>
        </Title>
        {tweetText.match(/[^\s]+/g).length >= 16 ? (
          <Message short>{tweetMessage(tweetText)}</Message>
        ) : (
          <Message>{tweetMessage(tweetText)}</Message>
        )}
        <ShortInfo>
          {infoSrc &&
            infoPromo && <Image alt={infoAlt} src={infoSrc} shortImg />}
          {infoSrc && !infoPromo && <Image alt={infoAlt} src={infoSrc} />}
          {infoPromo && (
            <Info>
              {infoTitle && <InfoTitle>{infoTitle}</InfoTitle>}
              {infoText && <InfoText>{infoText}</InfoText>}
              {infoLink && <InfoLink>{infoLink}</InfoLink>}
            </Info>
          )}
        </ShortInfo>
      </ContentContainer>
    </TweetContent>
  </React.Fragment>
);
