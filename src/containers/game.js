import React from 'react';
import Board from './board';

class Game extends React.Component {
  render(){
    return(
      <div id="game-container">
        "Hints go here"
        <Board />
      </div>
    )
  }
}

export default Game;