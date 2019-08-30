import initDeck from '../suppliments/DeckCreator';

// this Fisher-Yates shuffle function is taken from
// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
let shuffle = function (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const initState = {
  deck: shuffle(initDeck),
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