import React from 'react';
import {connect} from 'react-redux';
import Board from './board';
import './game.css';

class Game extends React.Component {

  handleClick = () => {
    this.props.drawCards();
  }

  render(){
    return(
      <div id="game-container">
        "Hints go here"
        <div onClick={this.handleClick} >Draw</div>
        <Board />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    drawCards: () => dispatch({type: "DRAW_CARDS"})
  }
}

export default connect(null, mapDispatchToProps)(Game);