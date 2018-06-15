import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pinned from "./pinned.svg";
import contentImg from "./post-img.jpg";
import comment from "./comment.svg";
import retweet from "./retweet.svg";
import like from "./like.svg";
import message from "./message.svg";

const Container = styled.div`
  background-color: white;
  min-width: 591px;
  width: 600px;
  margin-left: 18px;
`;

const ProfileHeading = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
`;

const Heading = styled.li`
  font-size: 18px;
  line-height: 20px;
  padding-right: 35px;
  font-weight: 500;
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;

  &:hover {
    text-decoration: underline;
  }
`;

const Post = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f8fa;
  }
`;

const AvatarContainer = styled.div`
  padding-right: 10px;
`;

const Avatar = styled(Link)`
  background-image: url(${"/img/small-avatar.png"});
  width: 45px;
  height: 45px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50px;
  padding-top: 35px;
`;

const ContentContainer = styled.div``;

const Pinned = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
  color: #707e88;
  position: relative;

  &:before {
    content: "";
    background-image: url(${pinned});
    position: absolute;
    width: 12px;
    height: 12px;
    left: -4%;
    background-repeat: no-repeat;
    background-position: center;
    top: 2px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

const Person = styled.div`
  margin-right: 4px;
`;

const PersonLink = styled(Link)`
  font-size: 16px;
  line-height: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Nickname = styled(Person)``;

const NicknameLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  color: #697787;
  text-decoration: none;
  padding-left: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.div`
  padding-left: 2px;
  
  &:before {
    content: "•";
    color: #697787;
  }
`;

const DateLink = styled(NicknameLink)`
  padding-left: 2px;
  cursor: pointer;
`;

const PostMessage = styled.p`
  font-size: 25px;
  font-weight: 200;
  line-height: 30px;
  color: black;
  margin: 2px 0 8px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const LinkProfile = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostMessageLink = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: black;
  margin: 2px 0 15px 0;
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
  width: 100%;
  backface-visibility: hidden;
  will-change: transform;
  max-width: 100%;
`;

const InfoContainer = styled.div`
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

const PostLinkContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.imgWidth ? "1fr" : "126px 1fr")};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  margin-top: 12px;
`;

const Action = styled.div`
  min-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const ActionImage = styled.img``;

const Count = styled.span`
  margin-left: 11px;
  min-width: 18px;
  width: 18px;
  display: inline-block;
  min-height: 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: #667580;
`;

export default () => {
  return (
    <Container>
      <ProfileHeading>
        <Heading>
          <HeadingLink to="/EveryInteract">
            Tweets
          </HeadingLink>
        </Heading>
        <Heading>
          <HeadingLink to="/EveryInteract/with_replies">
            Tweets & replies
          </HeadingLink>
        </Heading>
        <Heading>
          <HeadingLink to="/EveryInteract/media">
            Media
          </HeadingLink>
        </Heading>
      </ProfileHeading>
      <Post>
        <AvatarContainer>
          <Avatar alt="avatar" to="/EveryInteract" />
        </AvatarContainer>
        <ContentContainer>
          <Pinned>Pinned Tweet</Pinned>
          <Title>
            <Person>
              <PersonLink to="/EveryInteract">Every Interaction</PersonLink>
            </Person>
            <Nickname>
              <NicknameLink to="/EveryInteract">@EveryInteract</NicknameLink>
            </Nickname>
            <Date>
              <DateLink to="/status/777">
                2 Mar 2015
              </DateLink>
            </Date>
          </Title>
          <PostMessage>
            We've made some more resources for all you wonderful
            {" "}
            <Hashtag to="/hashtag/design">#design</Hashtag>
            {" "}
            folk
            {" "}
            <LinkWebSite href="https://everyinteraction.com/resources/">
              everyinteraction.com/resources/
            </LinkWebSite>
            {" "}
            <Hashtag to="/hashtag/webdesign">#webdesign</Hashtag>{" "}
            <Hashtag to="/hashtag/ui">#UI</Hashtag>{" "}
          </PostMessage>
          <PostLinkContainer imgWidth>
            <Image alt="post image" src={contentImg} />
          </PostLinkContainer>
          <Actions>
            <Action>
              <ActionImage alt="comment" src={comment} />
              <Count />
            </Action>
            <Action>
              <ActionImage alt="retweet" src={retweet} />
              <Count>17</Count>
            </Action>
            <Action>
              <ActionImage alt="like" src={like} />
              <Count>47</Count>
            </Action>
            <Action>
              <ActionImage alt="message" src={message} />
              <Count />
            </Action>
          </Actions>
        </ContentContainer>
      </Post>
      <Post>
        <AvatarContainer>
          <Avatar alt="avatar" to="/EveryInteract" />
        </AvatarContainer>
        <ContentContainer>
          <Title>
            <Person>
              <PersonLink to="/EveryInteract">Every Interaction</PersonLink>
            </Person>
            <Nickname>
              <NicknameLink to="/EveryInteract">@EveryInteract</NicknameLink>
            </Nickname>
            <Date>
              <DateLink to="/status/777">
                23h
              </DateLink>
            </Date>
          </Title>
          <PostMessage>
            Our new website concept; Taking you from ...
            {" "}
            <LinkProfile to="/EveryInteract">@ Every Interaction</LinkProfile>
            {" "}
            <LinkWebSite href="https://instagram.com/p/BNFGrfhBP3M/">
              instagram.com/p/BNFGrfhBP3M/
            </LinkWebSite>
            {" "}
          </PostMessage>
          <PostLinkContainer />
          <Actions>
            <Action>
              <ActionImage alt="comment" src={comment} />
              <Count>1</Count>
            </Action>
            <Action>
              <ActionImage alt="retweet" src={retweet} />
              <Count>4</Count>
            </Action>
            <Action>
              <ActionImage alt="like" src={like} />
              <Count>2</Count>
            </Action>
            <Action>
              <ActionImage alt="message" src={message} />
              <Count />
            </Action>
          </Actions>
        </ContentContainer>
      </Post>
      <Post>
        <AvatarContainer>
          <Avatar alt="avatar" to="/EveryInteract" />
        </AvatarContainer>
        <ContentContainer>
          <Title>
            <Person>
              <PersonLink to="/EveryInteract">Every Interaction</PersonLink>
            </Person>
            <Nickname>
              <NicknameLink to="/EveryInteract">@EveryInteract</NicknameLink>
            </Nickname>
            <Date>
              <DateLink to="/status/777">
                Nov 18
              </DateLink>
            </Date>
          </Title>
          <PostMessageLink>
            Variable web fonts are coming, and will open a world of
            opportunities for weight use online
          </PostMessageLink>
          <PostLinkContainer>
            <Image alt="Promo website" src={"/img/promo.png"} />
            <InfoContainer>
              <InfoTitle>The Future of Web Fonts</InfoTitle>
              <InfoText>
                We love typefaces. They give our sites and applications
                personalized feel. They convey the information and tell a story.
                They establish information hierarchy. But they’re…
              </InfoText>
              <InfoLink href="https://vilijamis.com">vilijamis.com</InfoLink>
            </InfoContainer>
          </PostLinkContainer>
          <Actions>
            <Action>
              <ActionImage alt="comment" src={comment} />
              <Count />
            </Action>
            <Action>
              <ActionImage alt="retweet" src={retweet} />
              <Count />
            </Action>
            <Action>
              <ActionImage alt="like" src={like} />
              <Count />
            </Action>
            <Action>
              <ActionImage alt="message" src={message} />
              <Count />
            </Action>
          </Actions>
        </ContentContainer>
      </Post>
    </Container>
  );
};
