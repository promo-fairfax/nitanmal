import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
