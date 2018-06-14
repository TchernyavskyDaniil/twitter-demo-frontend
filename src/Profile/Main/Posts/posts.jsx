import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../../Header/Nav/avatar.svg";
import pinned from "./pinned.svg";
import contentImg from "./post-img.jpg";
import comments from "./comment.svg";
import retweet from "./retweet.svg";
import likes from "./like.svg";
import message from "./message.svg";

const Container = styled.div`
  background-color: white;
  min-width: 591px;
  margin-left: 18px;
`;

const ProfileHeading = styled.ul`
  padding: 12px 16px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #E6ECF0;
`;

const HeadingLink = styled.li`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.01px;
  padding-right: 35px;
  font-weight: bold;
  
  & .heading-link {
    text-decoration: none;
    color: #1DA1F2;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;



export default () => {
  return (
    <Container>
      <ProfileHeading>
        <HeadingLink>
          <Link to="/EveryInteract" className="heading-link">
            Tweets
          </Link>
        </HeadingLink>
        <HeadingLink>
          <Link to="/EveryInteract/with_replies" className="heading-link">
            Tweets & replies
          </Link>
        </HeadingLink>
        <HeadingLink>
          <Link to="/EveryInteract/media" className="heading-link">
            Media
          </Link>
        </HeadingLink>
      </ProfileHeading>
      <Post>
        <AvatarContainer>
          <Avatar alt="avatar"/>
        </AvatarContainer>
        <ContentContainer>
          <Pinned>
            Pinned Tweet
          </Pinned>
          <Title>
            <Person>
              Every Interaction
            </Person>
            <Nickname>
              @EveryInteract
            </Nickname>
            <Date>
              <Day>
                2
              </Day>
              <Month>
                Mar
              </Month>
              <Year>
                2015
              </Year>
            </Date>
          </Title>
          <PostMessage>
            We've made some more resources for all you wonderful
            <Hashtag>
              #design
            </Hashtag>
            folk
            <LinkWebSite>
              everyinteraction.com/resources/
            </LinkWebSite>
            <Hashtag>
              #webdesign
            </Hashtag>
            <Hashtag>
              #UI
            </Hashtag>
          </PostMessage>
          <Image alt="post image" src={contentImg} />
          <Actions>
            <CommentContainer>
              <Comment alt="comments" />
              <Comments>

              </Comments>
            </CommentContainer>
            <RetweetContainer>
              <Retweet alt="retweet" />
              <Retweets>
                17
              </Retweets>
            </RetweetContainer>
            <LikesContainer>
              <Like alt="like" />
              <Likes>
                47
              </Likes>
            </LikesContainer>
            <MessageContainer>
              <Message alt="message" />
              <Messages>

              </Messages>
            </MessageContainer>
          </Actions>
        </ContentContainer>
      </Post>
    </Container>
  )
}
