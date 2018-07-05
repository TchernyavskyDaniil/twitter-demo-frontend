import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import { api } from "../utils";
import Tweet from "./Tweet";
import Tabs from "./Tabs";

const TweetList = styled.div`
  background-color: white;
`;

class Feeds extends Component {
  state = {
    error: false,
    feeds: []
  };

  componentDidMount() {
    this.getFeedInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.getFeedInfo();
    }
  }

  getFeedInfo = () => {
    fetch(
      `${api}/accounts/${this.props.match.url.slice(1)}/statuses?access_token=${
        process.env.REACT_APP_KEY
      }`
    )
      .then(res => res.json())
      .then(
        feeds => {
          this.setState({
            feeds
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  render() {
    const { error, feeds } = this.state;
    if (error) {
      return <h3>Error: {error.message}</h3>;
    }
    return (
      <React.Fragment>
        <Tabs />
        <Route
          exact
          path={`${this.props.match.url}`}
          render={() => (
            <TweetList>
              {feeds.map(feed => (
                <React.Fragment key={feed.id}>
                  {!feed.reblog ? (
                    !feed.in_reply_to_account_id && (
                      <Tweet
                        key={feed.id}
                        id={feed.id}
                        pinned={feed.pinned}
                        avatar={feed.account.avatar_static}
                        personNick={feed.account.username}
                        person={feed.account.display_name}
                        uri={feed.uri}
                        date={feed.created_at}
                        content={feed.content}
                        attachments={feed.media_attachments}
                        comments={feed.comments}
                        retweets={feed.reblogs_count}
                        likes={feed.favourites_count}
                        messages={feed.messages}
                        activeLike={feed.activeLike}
                      />
                    )
                  ) : (
                    <Tweet
                      reblog
                      key={feed.reblog.id}
                      id={feed.reblog.id}
                      userRetweet={feed.account.display_name}
                      pinned={feed.reblog.pinned}
                      avatar={feed.reblog.account.avatar_static}
                      personNick={feed.reblog.account.username}
                      person={feed.reblog.account.display_name}
                      uri={feed.reblog.uri}
                      date={feed.reblog.created_at}
                      content={feed.reblog.content}
                      attachments={feed.reblog.media_attachments}
                      comments={feed.reblog.comments}
                      retweets={feed.reblog.reblogs_count}
                      likes={feed.reblog.favourites_count}
                      messages={feed.reblog.messages}
                      activeLike={feed.reblog.activeLike}
                    />
                  )}
                </React.Fragment>
              ))}
            </TweetList>
          )}
        />
        <Route
          exact
          path={`${this.props.match.url}/with-replies`}
          render={() => (
            <TweetList>
              {feeds.map(feed => (
                <React.Fragment key={feed.id}>
                  {feed.reblog ? (
                    <Tweet
                      reblog
                      key={feed.reblog.id}
                      id={feed.reblog.id}
                      userRetweet={feed.account.display_name}
                      pinned={feed.reblog.pinned}
                      avatar={feed.reblog.account.avatar_static}
                      personNick={feed.reblog.account.username}
                      person={feed.reblog.account.display_name}
                      uri={feed.reblog.uri}
                      date={feed.reblog.created_at}
                      content={feed.reblog.content}
                      attachments={feed.reblog.media_attachments}
                      comments={feed.reblog.comments}
                      retweets={feed.reblog.reblogs_count}
                      likes={feed.reblog.favourites_count}
                      messages={feed.reblog.messages}
                      activeLike
                    />
                  ) : (
                    <Tweet
                      reply={feed.in_reply_to_account_id}
                      replyUser={feed.mentions}
                      key={feed.id}
                      id={feed.id}
                      pinned={feed.pinned}
                      avatar={feed.account.avatar_static}
                      personNick={feed.account.username}
                      person={feed.account.display_name}
                      uri={feed.uri}
                      date={feed.created_at}
                      content={feed.content}
                      attachments={feed.media_attachments}
                      comments={feed.comments}
                      retweets={feed.reblogs_count}
                      likes={feed.favourites_count}
                      messages={feed.messages}
                      activeLike={feed.activeLike}
                    />
                  )}
                </React.Fragment>
              ))}
            </TweetList>
          )}
        />
        <Route
          exact
          path={`${this.props.match.url}/media`}
          render={() => (
            <TweetList>
              {feeds.map(feed => (
                <React.Fragment key={feed.id}>
                  {(feed.media_attachments.length > 0 ||
                    feed.content.includes("href")) &&
                  !feed.in_reply_to_account_id &&
                  !feed.reblog ? (
                    <Tweet
                      key={feed.id}
                      id={feed.id}
                      pinned={feed.pinned}
                      avatar={feed.account.avatar_static}
                      personNick={feed.account.username}
                      person={feed.account.display_name}
                      uri={feed.uri}
                      date={feed.created_at}
                      content={feed.content}
                      attachments={feed.media_attachments}
                      comments={feed.comments}
                      retweets={feed.reblogs_count}
                      likes={feed.favourites_count}
                      messages={feed.messages}
                      activeLike={feed.activeLike}
                    />
                  ) : null}
                </React.Fragment>
              ))}
            </TweetList>
          )}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(Feeds);
