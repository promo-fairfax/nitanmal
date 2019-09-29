import React, { Component } from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/index';
import Tweets from '../Tweets/index';
import Horoscope from '../Horoscope/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.getHoroscope = this.getHoroscope.bind(this);
  }

  updateTweets = tweetsResponse => {
    this.setState({
      tweets: tweetsResponse.statuses.map(({ id_str }) => id_str)
    });
  };


  getHoroscope(number) {

    let emojiHoroscope = '';

    if (number <= 5) {
      emojiHoroscope = 'Gryffindor';
    } else if (number >= 6 && number <= 9) {
      emojiHoroscope = 'Slytherin';
    } else if (number >=10 && number <= 13 ) {
      emojiHoroscope = 'Ravenclaw';
    } else if (number => 14) {
      emojiHoroscope = 'Hufflepuff';
    } 

    this.setState({horoscope: emojiHoroscope});
    
    localStorage.setItem('emoji', emojiHoroscope);
  }

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
                <Link to="/horoscope">Horoscope</Link>
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
            <Route
              exact path="/horoscope"
              render={() => (
                <Horoscope getHoroscope={this.getHoroscope}/>
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
