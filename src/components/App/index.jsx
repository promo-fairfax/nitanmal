import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/index';
import Tweets from '../Tweets/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      tea: false
    };
    this.handleTea = this.handleTea.bind(this);
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };

  handleTea () {
    this.setState({tea : !this.state.tea});
    console.log(this.state.tea);
  }

  render() {
    const { tweets, tea } = this.state;
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
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <Home tea={tea} handleTea={this.handleTea} />
              )}
            />
            <Route
              exact path="/tweets"
              render={() => (
                <Tweets updateTweets={this.updateTweets} tweets={tweets} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
