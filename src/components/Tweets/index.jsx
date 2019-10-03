import React, { Component } from 'react';
import { TweetJs } from '../../services/tweetjs';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './Tweets.scss';

export default class Tweets extends Component {
  componentDidMount() {
    TweetJs.Search('%23tuertopreferido', data => {
      this.props.updateTweets(data);
    });
  }

  render() {
    const { tweets } = this.props;
    return (
      <ul className="tweet__list">
        {tweets.map(id => (
          <li className="tweet__item" key={id}>
            <TwitterTweetEmbed tweetId={id} options={{ width: '320px' }} />
          </li>
        ))}
      </ul>
    );
  }
}
