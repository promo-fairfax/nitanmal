import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/index';
import Tweets from '../Tweets/index';
import Chatbot from '../Chatbot/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };

  render() {
    const { tweets } = this.state;
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tweets">Tweets</Link>
              </li>
              <li>
                <Link to="/chatbot">Chatbot</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/tweets"
              render={() => (
                <Tweets updateTweets={this.updateTweets} tweets={tweets} />
              )}
            />
            <Route exact path="/chatbot" component={Chatbot} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
