import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../Landing/index';
import Home from '../Home/index';
import Tweets from '../Tweets/index';
import WhatsNext from '../WhatsNext/index';
import Horoscope from '../Horoscope/index';
import RandomCats from '../RandomCats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      chatbotOpen: false,
      btnBeer: false,
      closeModal: false,
      horoscope: '',
      tea: false
    };
    
    this.getHoroscope = this.getHoroscope.bind(this);
    this.handleChatbot = this.handleChatbot.bind(this);
    this.handleTea = this.handleTea.bind(this);
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };

  getHoroscope(number) {

    let emojiHoroscope = '';

    if (number >= 9) {
      emojiHoroscope = 'unicornio';
    } else if (number >= 5 && number <= 8) {
      emojiHoroscope = 'pizza';
    } else if (number <= 4 ) {
      emojiHoroscope = 'caca';
    }

    this.setState({horoscope: emojiHoroscope});
    
    localStorage.setItem('emoji', emojiHoroscope);
  }

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
    const { tweets, btnBeer, closeModal, chatbotOpen, tea, horoscope } = this.state;

    return (
      <div className="App">
        <header>
          <nav>
            <ul className='app__nav'>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/tweets">Tweets</Link>
              </li>
              <li>
                <Link to="/whats-next">What should I watch next?</Link>
              </li>
              <li>
                <Link to="/horoscope">Horoscope</Link>
              </li>
              <li>
                <Link to="/cats">Random Cats</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/landing" component={Landing}/>
            <Route
            exact path="/home"
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
            <Route exact path="/whats-next" component={WhatsNext} />
            <Route
              exact path="/horoscope"
              render={() => (
                <Horoscope getHoroscope={this.getHoroscope} horoscope={horoscope}/>
              )}
            />
            <Route exact path="/cats" component={RandomCats} />
            <Redirect from="/" to="/landing"/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
