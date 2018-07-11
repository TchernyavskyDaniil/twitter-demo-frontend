import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { api, token } from "../utils";
import Tweets from "./Tweets";
import Tabs from "./Tabs";

class Feeds extends Component {
  state = {
    error: false,
    withReplies: [],
    tweets: [],
    media: []
  };

  componentDidMount() {
    this.getFeedInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.getFeedInfo();
    }
  }

  getFeedInfo = async () => {
    await fetch(
      `${api}/accounts/${this.props.match.url.slice(
        1
      )}/statuses?access_token=${token}`
    )
      .then(res => res.json())
      .then(
        tweets => {
          this.getTypeTweet(tweets);
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };

  getTypeTweet = tweets => {
    tweets.map(tweet => {
      if (!tweet.in_reply_to_account_id) {
        this.setState(prevState => ({
          tweets: [...prevState.tweets, tweet]
        }));
      }

      if (
        (tweet.media_attachments.length > 0 ||
          tweet.content.includes("href")) &&
        !tweet.in_reply_to_account_id &&
        !tweet.reblog
      ) {
        this.setState(prevState => ({
          media: [...prevState.media, tweet]
        }));
      }

      return this.setState(prevState => ({
        withReplies: [...prevState.withReplies, tweet]
      }));
    });
  };

  render() {
    const { error, withReplies, tweets, media } = this.state;
    if (error) {
      return <h3>Error: {error.message}. Can not load Feeds</h3>;
    }
    return (
      <React.Fragment>
        <Tabs />
        <Route
          exact
          path={`${this.props.match.url}`}
          render={() => <Tweets tweets={tweets} />}
        />
        <Route
          exact
          path={`${this.props.match.url}/with-replies`}
          render={() => <Tweets tweets={withReplies} />}
        />
        <Route
          exact
          path={`${this.props.match.url}/media`}
          render={() => <Tweets tweets={media} />}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(Feeds);
