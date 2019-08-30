import React from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';

class Board extends React.Component {
  renderCards = () => {
    return this.props.cardsInPlay.map((card, i) => {
      debugger;
      return <Card card={card} key={i} selected={this.props.selectedCards.includes(card)} />
    })
  }

  handleClick = () => {
    this.props.drawCards();
  }

  render(){
    return(
      <div>
        <div onClick={this.handleClick} >Draw</div>
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