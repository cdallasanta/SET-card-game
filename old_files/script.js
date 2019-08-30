// let cardsMaster = [];
// let cardsInDeck = [];
let selectedCells = [];
let score = 0;
let topLevelTable = document.getElementById("top-level-table");

// const COLORS = ['red', 'blue', 'green'];
// const NUMBERS = [1, 2, 3];
// const SHAPES = ['oval', 'diamond', 'squiggle'];
// const SHADINGS = ['solid', 'striped', 'empty'];


let setUp = {
  // createDeck:function(){
  //   //this creates the deck of 81 cards and adds to the cardsMaster array. This only runs on startup
  //   COLORS.forEach(function(color){
  //     NUMBERS.forEach(function(num){
  //       SHAPES.forEach(function(shape){
  //         SHADINGS.forEach(function(shading){
  //           cardsMaster.push({
  //             color:color,
  //             number:num,
  //             shape:shape,
  //             shading:shading
  //           });
  //         });
  //       });
  //     });
  //   });
  // },
  // newDeck:function(){
  //   //creates a new array with numbers 0-80 to track which cards are still in the deck
  //   cardsInDeck = [];
  //   for (var i=0;i<81;i++){
  //     cardsInDeck.push(i);
  //   }
  // },
  clearCells: function(){
    //go through all cells, removing all children
    for(var num = 0; num<topLevelTable.childElementCount;num++){
      let cell = document.getElementById("cell"+num);
      while (cell.firstChild){
        cell.removeChild(cell.firstChild);
      }
      if(cell.classList.contains("selected")){
        cell.classList.remove("selected");
      }
    }
  }
};

let handlers = {
  // toggleSelected:function(cell){
  //   if(cell.classList.contains("selected")){
  //     cell.classList.remove("selected");
      
  //     //removing the selected cell from selected cells
  //     let itemToRemove = cell.firstChild.id;
  //     let indexedNum = String(selectedCells.indexOf(itemToRemove));
  //     selectedCells.splice(indexedNum,1);
      
  //   } else {
  //     cell.classList.add("selected");
  //     selectedCells.push(cell.firstChild.id);
  //   }
    
    //if there are three selected cells, run the comparison method
  //   if(selectedCells.length===3){
  //     this.runComparison(selectedCells);
    
  //     for(var num = 0; num<topLevelTable.childElementCount;num++){
  //       if(document.getElementById("cell"+num).classList.contains("selected")){
  //         document.getElementById("cell"+num).classList.remove("selected");
  //       }
  //     }
  //   }
  // },
  // dealCards:function(){
  //   let tableLength = topLevelTable.childElementCount;
  //   //go through each cell and do ______
  //   for(var num = 0; num<tableLength;num++){
  //     let cardHolder = document.getElementById("cell"+num);
        
  //     //if there are no items in the cell, add in items
  //     if(cardHolder.hasChildNodes() === false){
        
  //       //random number between 0 and how many cards are left in the deck
  //       let rand = Math.floor(Math.random()*cardsInDeck.length);
  //       let newCard = cardsInDeck[rand];
        
  //       //add divs with the correct shape, color, and shading, based on number. All info is from cardsMaster array of objects
  //       for (var i = 0;i<cardsMaster[newCard].number;i++){
  //         let newDiv = document.createElement("DIV");
  //         newDiv.classList.add(cardsMaster[newCard].color);
  //         newDiv.classList.add(cardsMaster[newCard].shape);
  //         newDiv.classList.add(cardsMaster[newCard].shading);
          
  //         cardHolder.appendChild(newDiv);
  //       }
          
  //       //the first child gets the id that is the index of the cardsMaster that cell is on
  //       //this is used when comparing the cards later
  //       cardHolder.firstChild.id = newCard;
        
  //       //remove that number from cardsInDeck
  //       cardsInDeck.splice(rand,1);
  //     }
  //   }
    
    //check if a match is present
    // if(hints.matchOnTable() === false){
    //   alert("There are no matches left.");
    // }
  // },
  // moveCards(){
  //   debugger;  
  //   //remove blank cards from the end so the next step doesn't pull empty cards
  //   while (topLevelTable.lastChild.hasChildNodes() === false){
  //     topLevelTable.removeChild(topLevelTable.lastChild);
  //   }
    
  //   //go through each cell, if it is empty, move items from final cell into the empty one
  //   for(var num = 0; num<topLevelTable.childElementCount;num++){   
  //     let newCell = document.getElementById("cell"+num);
  //     //if there are no items in the cell, add in items from the lastChild, then remove the lastChild
  //     if(newCell.hasChildNodes() === false){
  //       let oldCell = topLevelTable.lastChild;
  //         while (oldCell.hasChildNodes()){
  //           newCell.appendChild(oldCell.firstChild);
  //         }
  //       topLevelTable.removeChild(oldCell);
  //       while (topLevelTable.lastChild.hasChildNodes() === false){
  //         topLevelTable.removeChild(topLevelTable.lastChild);
  //       }
  //     }
  //   }
    
  //   //check if a match is present
  //   if(hints.matchOnTable() === false){
  //     alert("There are no matches left.");
  //   }
  // },
  runComparison(cellsArr){
    let tableLength = topLevelTable.childElementCount;
    //debugger;
    let card1 = cardsMaster[cellsArr[0]];
    let card2 = cardsMaster[cellsArr[1]];
    let card3 = cardsMaster[cellsArr[2]];
    
    //checking shape for all the same or all different
    if (((card1.shape!=card2.shape && card1.shape!=card3.shape) && card2.shape!=card3.shape)||(card1.shape==card2.shape&&card2.shape==card3.shape)){
      //checking shading
      if (((card1.shading!=card2.shading && card1.shading!=card3.shading) && card2.shading!=card3.shading)||(card1.shading==card2.shading&&card2.shading==card3.shading)){
        //checking color
        if (((card1.color!=card2.color && card1.color!=card3.color) && card2.color!=card3.color)||(card1.color==card2.color&&card2.color==card3.color)){
          //checking number
          if (((card1.number!=card2.number && card1.number!=card3.number) && card2.number!=card3.number)||(card1.number==card2.number&&card2.number==card3.number)){
            //increment score by 1
            score++;
            document.getElementById("score").textContent = score;
            
            //clear the cells that were tested
            for(var num = 0; num<tableLength;num++){
              let cell = document.getElementById("cell"+num);
              if(cell.classList.contains("selected")){
                while (cell.firstChild){
                  cell.removeChild(cell.firstChild);
                }
                cell.classList.remove("selected");
              }
            }
            
            //redeal if there are fewer than 12, or move the extras into empty spot if not
            if(topLevelTable.childElementCount > 12 || cardsInDeck.length < 12){
              this.moveCards();
            } else {
              this.dealCards();
            }
          }
        }
      }
    }
    
    //clear selectedCells
    selectedCells = [];
  }
};



document.getElementById("new-game-button").addEventListener("click", function(){
  while(topLevelTable.childElementCount>12){
    topLevelTable.removeChild(topLevelTable.lastChild);
  }
  setUp.newDeck();
  setUp.clearCells();
  handlers.dealCards();
  score = 0;
  document.getElementById("score").textContent = score;
  selectedCells=[];
});

document.getElementById("hint-button").addEventListener("click", function(){
  let isMatchPresent = hints.matchOnTable()
  if(isMatchPresent === false){
    alert("There are no matches present");
  } else {
    let hintCell = document.getElementById("cell" + isMatchPresent[0]);
    handlers.toggleSelected(hintCell);
  }
});

document.getElementById("shuffle-button").addEventListener("click", function(){
  hints.shuffleCards();
});

document.getElementById("deal-more-button").addEventListener("click", function(){
  hints.dealMoreCards();
});

topLevelTable.addEventListener("click", function(event){
  if(event.target.classList.contains("card-holder")){
     handlers.toggleSelected(event.target);
  } else if (event.target.parentNode.classList.contains("card-holder")){
    handlers.toggleSelected(event.target.parentNode);
  }
});

// setUp.createDeck();