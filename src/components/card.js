import React from 'react';
import {connect} from 'react-redux';
import './card.css';

const Card = ({card: {id, color, number, shape, shading}, selected}) => {
  function renderCard() {
    const cardContents = [];
    debugger;
    for(let i = 0; i < number; i++){
      cardContents.push(<div className={`${color} ${shading} ${shape}`} key={i} />);
    }

    return cardContents
  }

  function handleClick() {
    this.props.selectCard(id)
  }

  return (
    <div className={`card${selected ? " selected" : ""}`} id={id} onClick={handleClick} >
      {renderCard()}
    </div>
  )

}

const mapDispatchToProps = dispatch => {
  return {
    selectCard: card => dispatch({type: "SELECT_CARD", payload: card})
  }
}

export default connect(null, mapDispatchToProps)(Card);