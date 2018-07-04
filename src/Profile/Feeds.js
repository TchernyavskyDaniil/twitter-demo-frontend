import React, { Component } from "react";
import { Route } from "react-router-dom";
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
    fetch(
      `${api}/accounts/${this.props.match.url.slice(1)}/statuses?access_token=${
        process.env.REACT_APP_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            feeds: result
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
              ))}
            </TweetList>
          )}
        />
        <Route
          exact
          path={`${this.props.match.url}/with-replies`}
          render={() => <h3> This is With Replies </h3>}
        />
        <Route
          exact
          path={`${this.props.match.url}/media`}
          render={() => (
            <TweetList>
              {feeds.map(feed => (
                <React.Fragment key={feed.id}>
                  {feed.media_attachments.length > 0 ||
                  feed.content.includes("href") ? (
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

export default Feeds;
