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
      btnBeer: false,
      closeModal: false
    };
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };

  onClickBeer = () => {
    this.setState({ btnBeer: true })
  }

  onClickClose = () => {
    this.setState({ closeModal: false ? true : false, btnBeer: false })
  }

  render() {
    const { tweets, btnBeer, closeModal } = this.state;
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
            <Route exact path="/" render={() => (
              <Home onClickBeer={ this.onClickBeer }
                btnBeer={ btnBeer }
                onClickClose={ this.onClickClose }
                closeModal={ closeModal }/>
            )} />
            <Route
              exact
              path="/tweets"
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
