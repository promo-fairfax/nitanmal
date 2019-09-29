import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/index';
import Tweets from '../Tweets/index';
import RandomCats from '../RandomCats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      chatbotOpen: false,
      btnBeer: false,
      closeModal: false,
      tea: false
    };
    this.handleChatbot = this.handleChatbot.bind(this);
    this.handleTea = this.handleTea.bind(this);
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };

  handleChatbot () {
    this.setState({chatbotOpen: !this.state.chatbotOpen});
  }
  onClickBeer = () => {
    this.setState({ btnBeer: true })
  }

  onClickClose = () => {
    this.setState({ closeModal: false ? true : false, btnBeer: false })
  }
  
  handleTea () {
    this.setState({tea : !this.state.tea});
    console.log(this.state.tea);
  }

  render() {
    const { tweets, btnBeer, closeModal, chatbotOpen, tea } = this.state;

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
                <Link to="/cats">Random Cats</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <RandomCats /> */}
        <main>
          <Switch>
            <Route
            exact path="/"
            render={() => (
              <Home chatbotOpen={chatbotOpen}
                handleChatbot={this.handleChatbot}
                onClickBeer={ this.onClickBeer }
                btnBeer={ btnBeer }
                onClickClose={ this.onClickClose }
                closeModal={ closeModal }
                tea={tea}
                handleTea={this.handleTea} />
              )}
            />
            <Route
              exact path="/tweets"
              render={() => (
                <Tweets updateTweets={this.updateTweets} tweets={tweets} />
              )}
            />
            <Route exact path="/cats" component={RandomCats} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
