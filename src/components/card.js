import React from 'react';
import './card.css';

class Card extends React.Component {
  state = {
    selected: false
  }

  renderCard = () => {
    return this.props.
  }

  render(){
    return (
      <div className="card" id={`cell-${this.props.key}`}>
        {this.renderCard()}
      </div>
    )
  }
}

export default Card;