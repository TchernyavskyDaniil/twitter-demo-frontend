import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { Link } from "react-router-dom";
import { formatDate, api, token } from "../../utils";
import Actions from "../Actions";
import iconPinned from "./icons/pinned.svg";
import iconRetweet from "./icons/retweet.svg";

const TweetContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarContainer = styled.div`
  padding-right: 10px;
`;

const User = styled(Link)`
  color: #0b24fb;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  display: block;
  margin-top: 10px;
  border-radius: 50%;
`;

const ContentContainer = styled.div``;

const State = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 29px;
`;

const StateText = styled.p`
  margin: 0;
  font-size: ${styledMap({
    reply: "14px",
    default: "12px"
  })};
  line-height: 14px;
  color: #707e88;
  padding: ${styledMap({
    reply: "5px 5px 0 2px",
    default: "0 0 0 6px"
  })};
`;

const StateIcon = styled.img``;

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

const Desc = styled.a`
  font-size: 14px;
  line-height: 16px;
  color: #697787;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.div`
  font-size: ${styledMap({
    short: "16px",
    default: "25px"
  })};

  line-height: ${styledMap({
    short: "22px",
    default: "30px"
  })};

  color: black;
  margin: 2px 0 8px 0;
  white-space: pre-wrap;
  font-weight: normal;
  word-wrap: break-word;

  p {
    margin: 4px 0 17px 0;

    a {
      color: #1da1f2;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Image = styled.img`
  width: ${styledMap({
    shortImg: "126px",
    maxWidth: "100%",
    default: "45%"
  })};

  height: ${styledMap({
    shortImg: "126px",
    default: "100%"
  })};

  padding: ${styledMap({
    shortImg: "0",
    default: "5px"
  })};

  backface-visibility: hidden;
  will-change: transform;
  object-fit: cover;
  max-width: 100%;
  border-radius: ${styledMap({
    shortImg: "0",
    default: "10px"
  })};
`;

const Info = styled.a`
  font-size: 15px;
  line-height: 18px;
  border: 1px solid #e1e8ed;
  padding: 2px 6px 2px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  height: 120px;
  color: black;
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

const InfoLink = styled.span`
  font-weight: normal;
  color: #697787;
  text-decoration: none;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-top: 5px;

  flex-wrap: ${styledMap({
    fewImg: "wrap",
    default: "initial"
  })};
`;

const TweetSt = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

class Tweet extends Component {
  state = {
    error: false,
    preview: [],
    tweet: [],
    reblogStatus: false,
    userRetweet: null
  };

  componentDidMount() {
    fetch(`${api}/statuses/${this.props.tweet.id}/card?access_token=${token}`)
      .then(res => res.json())
      .then(
        preview => {
          this.setState({
            preview
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );

    this.getTypeTweet();
  }

  getTypeTweet = () => {
    if (this.props.tweet.reblog !== null) {
      this.setState({
        userRetweet: this.props.tweet.account.display_name,
        tweet: this.props.tweet.reblog,
        reblogStatus: true
      });
    } else {
      this.setState({
        tweet: this.props.tweet
      });
    }
  };

  render() {
    const { error, preview, tweet, reblogStatus, userRetweet } = this.state;
    if (error) {
      return <h3>Error: {error.message}. Can not render Tweet</h3>;
    }
    return (
      <React.Fragment>
        {tweet.id !== undefined ? (
          <TweetSt key={tweet.id}>
            {tweet.pinned && (
              <State>
                <StateIcon alt="Pinned image" src={iconPinned} />
                <StateText>Pinned Tweet</StateText>
              </State>
            )}
            {reblogStatus && (
              <State>
                <StateIcon alt="Retweet image" src={iconRetweet} />
                <StateText>{userRetweet} retwined</StateText>
              </State>
            )}
            <TweetContent>
              <AvatarContainer>
                <Avatar src={tweet.account.avatar_static} />
              </AvatarContainer>
              <ContentContainer>
                <Title>
                  <PersonLink to={`/${tweet.account.id}`}>
                    <Person>{tweet.account.display_name}</Person>
                    <Nickname>@{tweet.account.username}</Nickname>
                  </PersonLink>
                  <Date>
                    <Dotted> • </Dotted>
                    <Desc href={tweet.uri}>{formatDate(tweet.created_at)}</Desc>
                  </Date>
                </Title>
                {tweet.in_reply_to_account_id &&
                  tweet.mentions[0] && (
                    <StateText reply>
                      In reply{" "}
                      <User to={`/${tweet.mentions[0].id}`}>
                        @{tweet.mentions[0].username}
                      </User>
                    </StateText>
                  )}
                {tweet.content.length > 120 ? (
                  <Message
                    short
                    dangerouslySetInnerHTML={{ __html: tweet.content }}
                  />
                ) : (
                  <Message
                    dangerouslySetInnerHTML={{ __html: tweet.content }}
                  />
                )}
                {tweet.media_attachments.length > 1 && (
                  <ShortInfo fewImg>
                    {tweet.media_attachments.map(attachment => (
                      <Image
                        key={attachment.id}
                        alt="Tweet image"
                        src={attachment.preview_url}
                      />
                    ))}
                  </ShortInfo>
                )}
                {tweet.media_attachments.length === 1 &&
                  tweet.media_attachments.map(attachment => (
                    <ShortInfo key={attachment.id}>
                      <Image
                        alt="Tweet image"
                        src={attachment.preview_url}
                        maxWidth
                      />
                    </ShortInfo>
                  ))}
                {preview.url && (
                  <ShortInfo>
                    {preview.image && (
                      <Image alt="Tweet image" src={preview.image} shortImg />
                    )}
                    <Info href={preview.url}>
                      <InfoTitle>{preview.title}</InfoTitle>
                      <InfoText>{preview.description}</InfoText>
                      <InfoLink>{preview.url}</InfoLink>
                    </Info>
                  </ShortInfo>
                )}
                <Actions
                  comments={this.props.comments}
                  retweets={tweet.reblogs_count}
                  likes={tweet.favourites_count}
                  messages={this.props.messages}
                  activeLike={this.props.activeLike}
                />
              </ContentContainer>
            </TweetContent>
          </TweetSt>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Tweet;
