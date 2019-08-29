import React from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';

class Board extends React.Component {
  renderCards = () => {
    console.log(this.props.cards)
    return this.props.cardsInPlay.map(card => {
      return <Card card={card} key={card.id}/>
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
    cardsInPlay: state.cardsInPlay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    drawCards: () => dispatch({type: "DRAW_CARDS"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);