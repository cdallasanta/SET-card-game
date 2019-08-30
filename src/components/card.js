import React from 'react';
import {connect} from 'react-redux';
import './card.css';

const Card = ({card: {id, color, number, shape, shading}, selected, dispatch}) => {
  function renderCard() {
    const cardContents = [];
    for(let i = 0; i < number; i++){
      cardContents.push(<div className={`${color} ${shading} ${shape}`} key={i} />);
    }

    return cardContents
  }

  const handleClick = () => {
    dispatch({type: "SELECT_CARD", payload: id});
  }

  return (
    <div className={`card${selected ? " selected" : ""}`} id={id} onClick={handleClick} >
      {renderCard()}
    </div>
  )

}

export default connect()(Card);