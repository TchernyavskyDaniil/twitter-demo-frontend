import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { Link } from "react-router-dom";
import { dateFormat, api } from "../utils";
import Actions from "./Actions";
import iconPinned from "./pinned.svg";

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

  flex-wrap: ${styledMap({
    fewImg: "wrap",
    default: "none"
  })};
`;

const TweetSt = styled.section`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e6ecf0;
  cursor: pointer;

  &:hover {
    background-color: #f5f8fa;
  }
`;

class Tweet extends Component {
  state = {
    error: false,
    card: []
  };

  componentDidMount() {
    fetch(
      `${api}/statuses/${this.props.id}/card?access_token=${
        process.env.REACT_APP_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            card: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, card } = this.state;
    if (error) {
      return <h3>Can not render Tweet</h3>;
    }
    return (
      <TweetSt key={this.props.id}>
        {this.props.pinned && (
          <Pinned>
            <PinnedIcon alt="Pinned image" src={iconPinned} />
            <PinnedText>Pinned Tweet</PinnedText>
          </Pinned>
        )}
        <TweetContent>
          <AvatarContainer>
            <Avatar src={this.props.avatar} />
          </AvatarContainer>
          <ContentContainer>
            <Title>
              <PersonLink to={`/${this.props.personNick}`}>
                <Person>{this.props.person}</Person>
                <Nickname>@{this.props.personNick}</Nickname>
              </PersonLink>
              <Date>
                <Dotted> • </Dotted>
                <Desc href={this.props.uri}>{dateFormat(this.props.date)}</Desc>
              </Date>
            </Title>
            {this.props.content.length > 120 ? (
              <Message
                short
                dangerouslySetInnerHTML={{ __html: this.props.content }}
              />
            ) : (
              <Message
                dangerouslySetInnerHTML={{ __html: this.props.content }}
              />
            )}
            {this.props.attachments.length > 1 && (
              <ShortInfo fewImg>
                {this.props.attachments.map(attachment => (
                  <Image
                    key={attachment.id}
                    alt="Tweet image"
                    src={attachment.preview_url}
                  />
                ))}
              </ShortInfo>
            )}
            {this.props.attachments.length === 1 &&
              this.props.attachments.map(attachment => (
                <ShortInfo key={attachment.id}>
                  <Image
                    alt="Tweet image"
                    src={attachment.preview_url}
                    maxWidth
                  />
                </ShortInfo>
              ))}
            {card.url && (
              <ShortInfo>
                {card.image && (
                  <Image alt="Tweet image" src={card.image} shortImg />
                )}
                <Info href={card.url}>
                  <InfoTitle>{card.title}</InfoTitle>
                  <InfoText>{card.description}</InfoText>
                  <InfoLink>{card.url}</InfoLink>
                </Info>
              </ShortInfo>
            )}
            <Actions
              comments={this.props.comments}
              retweets={this.props.retweets}
              likes={this.props.likes}
              messages={this.props.messages}
              activeLike={this.props.activeLike}
            />
          </ContentContainer>
        </TweetContent>
      </TweetSt>
    );
  }
}

export default Tweet;
