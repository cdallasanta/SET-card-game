import initDeck from '../suppliments/DeckCreator';

const initState = {
  deck: initDeck,
  cardsInPlay: [],
  score: 0,
  selectedCards: []
}

function GameReducer(state = initState, action){
  switch(action.type){
    case "NEW_GAME":
      return state;
    case "DRAW_CARDS":
      let newCards = state.deck.slice(0,3)

      return {...state,
        cardsInPlay: [...state.cardsInPlay, ...newCards],
        deck: state.deck.slice(3)
      }
    default:
      return state;
  }
}

export default GameReducer;