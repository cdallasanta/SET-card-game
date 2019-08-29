const COLORS = ['red', 'blue', 'green'];
const NUMBERS = [1, 2, 3];
const SHAPES = ['oval', 'diamond', 'squiggle'];
const SHADINGS = ['solid', 'striped', 'empty'];

const initDeck = [];

let i = 0;
//this creates the deck of 81 cards and adds to the cardsMaster array. This only runs on startup
COLORS.forEach(function(color){
  NUMBERS.forEach(function(num){
    SHAPES.forEach(function(shape){
      SHADINGS.forEach(function(shading){
        initDeck.push({
          id: i,
          color: color,
          number: num,
          shape: shape,
          shading: shading
        });

        i++;
      });
    });
  });
});

export default initDeck;