import React from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';

class Board extends React.Component {
  renderCards = () => {
    return this.props.cardsInPlay.map(card => {
      return <Card card={card} />
    })
  }

  render(){
    return(
      this.renderCards()
    )
  }
}

const mapStateToProps = state => {
  return {
    cardsInPlay: state.cardsInPlay
  }
}

export default connect(mapStateToProps)(Board);