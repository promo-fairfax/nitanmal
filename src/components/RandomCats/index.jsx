import React, { Component } from 'react';
import { getCat } from '../../services/getCat';

class RandomCats extends Component {
  constructor(props){
    super(props);
    this.state = {
      catData: {}
    }
  }

  componentDidMount(){
    return getCat()
      .then(data => this.setState({catData: data[0]}))
  }

  render(){
    const { catData } = this.state;
    return(
      <div className="random__cat-container">
        <h2 className="random__cat-title">Welcome to the random cat page</h2>
        <h3 className="random__cat-subtitle">Click on the button to get a random cat!</h3>
        <button className="random__cat-button">Click me</button>
        <img src={catData.url} alt="cat"/>
      </div>
    )
  }
}

export default RandomCats;
