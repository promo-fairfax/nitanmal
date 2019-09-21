import React, { Component } from 'react';
import { getCat } from '../../services/getCat';
import './RandomCats.scss';

class RandomCats extends Component {
  constructor(props){
    super(props);
    this.state = {
      catData: {}
    }

    this.handleCatFetch = this.handleCatFetch.bind(this);
  }

  handleCatFetch(){
    return getCat()
      .then(data => this.setState({catData: data[0]}))
  }

  render(){
    const { catData } = this.state;
    const { handleCatFetch } = this;
    return (
      <div className="random__cat-container">
        <h2 className="random__cat-title">Welcome to the random cat page</h2>
        <h3 className="random__cat-subtitle">
          Click on the button to get a random cat!
        </h3>
        <button className="button random__cat-button" onClick={handleCatFetch}>
          Click me
        </button>
        {catData.url && (
          <img
            src={catData.url}
            alt={`Random cat ${catData.id}`}
            className="random__cat-image"
          />
        )}
        {catData.url && (
          <div className="twitter__container">
            <a
              className="button twitter__button"
              href={`http://twitter.com/share?text=Here is my favourite new cat&url=${catData.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share this cat picture on Twitter!
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default RandomCats;
