import React from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';

class Board extends React.Component {
  renderCards = () => {
    return this.props.cardsInPlay.map((card, i) => {
      return <Card card={card} key={i} selected={this.props.selectedCards.includes(card)} />
    })
  }

  render(){
    return(
      <div id="game-board">
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cardsInPlay: state.cardsInPlay,
    selectedCards: state.selectedCards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    drawCards: () => dispatch({type: "DRAW_CARDS"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);