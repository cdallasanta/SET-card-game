import React from 'react';
import './card.css';

class Card extends React.Component {
  state = {
    selected: false
  }

  renderCard = () => {
    const cardContents = [];
    for(let i = 0; i < this.props.card.number; i++){
      cardContents.push(<div className={`${this.props.card.color} ${this.props.card.shading} ${this.props.card.shape}`} key={i} />);
    }

    return cardContents
  }

  render(){
    return (
      <div className="card" id={`cell-${this.props.card.id}`}>
        {this.renderCard()}
      </div>
    )
  }
}

export default Card;