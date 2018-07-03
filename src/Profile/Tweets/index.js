import React, { Component } from "react";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetList = styled.div`
  background-color: white;
`;

class Tweets extends Component {
  constructor(match) {
    super(match);
    this.id = match;
  }

  state = {
    error: false,
    tweets: []
  };

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${this.id.match.url.slice(
        1
      )}/statuses?access_token=${process.env.REACT_APP_KEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            tweets: result
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
    const { error, tweets } = this.state;
    if (error) {
      return <h3>Error: {error.message}</h3>;
    }

    return (
      <TweetList>
        {tweets.map(tweet => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            pinned={tweet.pinned}
            avatar={tweet.account.avatar_static}
            personNick={tweet.account.username}
            person={tweet.account.display_name}
            uri={tweet.uri}
            date={tweet.created_at}
            content={tweet.content}
            media={tweet.media_attachments}
            comments={tweet.comments}
            retweets={tweet.reblogs_count}
            likes={tweet.favourites_count}
            messages={tweet.messages}
            activeLike={tweet.activeLike}
          />
        ))}
      </TweetList>
    );
  }
}

export default Tweets;
