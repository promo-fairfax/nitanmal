import React from 'react';

const RandomCats = () => {
  return(
    <div className="random__cat-container">
      <h2 className="random__cat-title">Welcome to the random cat page</h2>
      <h3 className="random__cat-subtitle">Click on the button to get a random cat!</h3>
      <button className="random__cat-button">Click me</button>
    </div>
  )
}

export default RandomCats;
