import React, { Component } from 'react';
import { TweetJs } from '../../services/tweetjs';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './Tweets.scss';

export default class Tweets extends Component {
  componentDidMount() {
    TweetJs.Search('%23superbowl', data => {
      this.props.updateTweets(data);
    });
  }

  render() {
    const { tweets } = this.props;
    return (
      <ul className="tweet__list">
        {tweets.map(id => (
          <li className="tweet__item">
            <TwitterTweetEmbed
              tweetId={id}
              key={id}
              options={{ width: '320px' }}
            />
          </li>
        ))}
      </ul>
    );
  }
}
