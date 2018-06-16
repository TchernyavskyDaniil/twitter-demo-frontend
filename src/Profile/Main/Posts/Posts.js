import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileHeading from "./Tabs/ProfileHeading";
import pinned from "./pinned.svg";
import comment from "./comment.svg";
import retweet from "./retweet.svg";
import like from "./like.svg";
import message from "./message.svg";
import likeActive from "./like-active.svg";

const Container = styled.div`
  background-color: white;
  min-width: 591px;
  width: 600px;
  margin-left: 18px;
`;

const Post = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

const PostContent = styled.div`
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
  font-size: ${props => (props.short ? "16px" : "25px")};
  font-weight: 200;
  line-height: ${props => (props.short ? "22px" : "30px")};
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
  width: ${props => (props.shortImg ? "126px" : "100%")};
  height: ${props => (props.shortImg ? "126px" : "100%")};
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

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  margin-top: 12px;
`;

const ActionImage = styled.img`
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
`;

const Action = styled.div`
  min-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${ActionImage} {
      border-bottom: 1px solid black;
    }
  }
`;

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

// Я понимаю, что рано лезу, но не пизди сильно за этот код.
// Если что конечно пределаю в следующем этапе (Если пройду)

class Posts extends Component {
  state = {
    textPin: "Pinned Tweet",

    posts: [
      {
        key: 1,
        avatar: "/img/small-avatar.png",
        statusPin: true,
        personLink: "/EveryInteract",
        person: "Every Interaction",
        nicknameLink: "/EveryInteract",
        nickname: "@EveryInteract",
        dateLink: "/status/777",
        date: "2 Mar 2015",
        postText:
          "We've made some more resources for all you wonderful " +
          "#design folk everyinteraction.com/resources/ #webdesign #UI",
        alt: "Post image",
        src: "/img/post.png",
        promo: false,
        promoTitle: null,
        promoText: null,
        promoLink: null,
        shortMessage: true,
        actionPost: {
          comments: null,
          retweets: 17,
          likes: 47,
          messages: null
        }
      },
      {
        key: 2,
        avatar: "/img/small-avatar.png",
        statusPin: false,
        personLink: "/EveryInteract",
        person: "Every Interaction",
        nicknameLink: "/EveryInteract",
        nickname: "@EveryInteract",
        dateLink: "/status/776",
        date: "23h",
        postText:
          "Our new website concept; Taking you from ... @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
        alt: "post image",
        src: null,
        promo: false,
        promoTitle: null,
        promoText: null,
        promoLink: null,
        shortMessage: true,
        actionPost: {
          comments: 1,
          retweets: 4,
          likes: 2,
          messages: null
        }
      },
      {
        key: 3,
        avatar: "/img/small-avatar.png",
        statusPin: false,
        personLink: "/EveryInteract",
        person: "Every Interaction",
        nicknameLink: "/EveryInteract",
        nickname: "@EveryInteract",
        dateLink: "/status/775",
        date: "Nov 18",
        postText:
          "Variable web fonts are coming, " +
          "and will open a world of opportunities for weight use online",
        alt: "Promo website",
        src: "/img/promo.png",
        promo: true,
        promoTitle: "The Future of Web Fonts",
        promoText:
          "We love typefaces. They give our sites and applications " +
          "personalized feel. They convey the information and tell a story. " +
          "They establish information hierarchy. But they’re…",
        promoLink: "vilijamis.com",
        shortMessage: true,
        actionPost: {
          comments: null,
          retweets: null,
          likes: null,
          messages: null
        }
      }
    ],
    actions: [
      {
        key: 1,
        alt: "comments",
        src: comment,
        count: null
      },
      {
        key: 2,
        alt: "retweets",
        src: retweet,
        count: null
      },
      {
        key: 3,
        alt: "likes",
        src: like,
        count: null
      },
      {
        key: 4,
        alt: "messages",
        src: message,
        count: null
      }
    ],
    activeIndex: 0
  };

  postMessage = text => {
    let newText = [];
    let textArr = text.split(" ");
    let element;

    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i][0] === "#") {
        element = (
          <span>
            <Hashtag to={"/" + textArr[i]}>{textArr[i]}</Hashtag>{" "}
          </span>
        );
        // Пока только с com, раз сам сказал, что слишком рано лезу
      } else if (textArr[i].includes(".com")) {
        element = (
          <span>
            <LinkWebSite href={"https://" + textArr[i]}>
              {textArr[i]}
            </LinkWebSite>{" "}
          </span>
        );
      } else {
        element = textArr[i] + " ";
      }

      newText.push(element);
    }

    return newText;
  };

  render() {
    return (
      <Container>
        <ProfileHeading />
        {this.state.posts.map(item => {
          return (
            <Post key={item.key}>
              {item.statusPin && (
                <Pinned>
                  <PinnedIcon alt="Pinned icon" src={pinned} />
                  <PinnedText>{this.state.textPin}</PinnedText>
                </Pinned>
              )}
              <PostContent>
                <AvatarContainer>
                  <Avatar src={item.avatar} />
                </AvatarContainer>
                <ContentContainer>
                  <Title>
                    <Person>
                      <PersonLink to={item.personLink}>
                        {item.person}
                      </PersonLink>
                    </Person>
                    <Nickname>
                      <NicknameLink to={item.nicknameLink}>
                        {item.nickname}
                      </NicknameLink>
                    </Nickname>
                    <Date>
                      <DateLink to={item.dateLink}>{item.date}</DateLink>
                    </Date>
                  </Title>
                  {item.postText.match(/[^\s]+/g).length >= 16 ? (
                    <PostMessage short>
                      {this.postMessage(item.postText)}
                    </PostMessage>
                  ) : (
                    <PostMessage>{this.postMessage(item.postText)}</PostMessage>
                  )}
                  <ShortInfo>
                    {item.src &&
                      item.promo && (
                        <Image alt={item.alt} src={item.src} shortImg />
                      )}
                    {item.src &&
                      !item.promo && <Image alt={item.alt} src={item.src} />}
                    {item.promo && (
                      <Info>
                        {item.promoTitle && (
                          <InfoTitle>{item.promoTitle}</InfoTitle>
                        )}
                        {item.promoText && (
                          <InfoText>{item.promoText}</InfoText>
                        )}
                        {item.promoLink && (
                          <InfoLink>{item.promoLink}</InfoLink>
                        )}
                      </Info>
                    )}
                  </ShortInfo>
                  <Actions>
                    {this.state.actions.map((action, index) => {
                      return (
                        <Action key={action.key}>
                          {action.alt === "likes" && item.key === 1 ? (
                            <ActionImage alt={action.alt} src={likeActive} />
                          ) : (
                            <ActionImage alt={action.alt} src={action.src} />
                          )}
                          <Count>
                            {" "}
                            {
                              item.actionPost[
                                Object.keys(item.actionPost)[index]
                              ]
                            }{" "}
                          </Count>
                        </Action>
                      );
                    })}
                  </Actions>
                </ContentContainer>
              </PostContent>
            </Post>
          );
        })}
      </Container>
    );
  }
}

export default Posts;
