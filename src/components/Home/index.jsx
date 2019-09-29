import React from 'react';
import './Home.scss';
import Tea from '../Tea/index';

export default class Home extends React.Component {
  render() {
    const { tea, handleTea } = this.props;
    return (
      <div className="home">
        <div className="home__tea--button" onClick={handleTea}>¿Un té rico?</div>
        <div className="home__tea">
          {tea ? 
            <Tea handleTea={handleTea} />
            :
            null
          }
        </div>
      </div>
    )
  }
}
