let hints = {
  matchOnTable:function(){
    for (var a=0;a<topLevelTable.childElementCount;a++){
      for (var b=1;b<topLevelTable.childElementCount;b++){
        for(var c=2;c<topLevelTable.childElementCount;c++){
          if (a!=b && a!=c && b!=c){
            let cell1Id = document.getElementById("cell"+a).firstChild.id;
            let cell2Id = document.getElementById("cell"+b).firstChild.id;
            let cell3Id = document.getElementById("cell"+c).firstChild.id;
            if(this.hintComparison([cell1Id,cell2Id,cell3Id]) === true){
              return [a,b,c];
            }
          }
        }
      }
    }
    return false;
  },
  hintComparison: function(cellsArr){
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
            return true;
          }
        }
      }
    } else {
      return false;
    }
  },
  shuffleCards:function(){
    selectedCells = [];
    
    //get an array with which cards are on table
    var cardsOnTable = [];
    for (var i = 0; i<topLevelTable.childElementCount;i++){
      cardsOnTable.push(document.getElementById("cell"+i).firstChild.id);
    }
    
    //clear table
    setUp.clearCells();
    
    //go through each cell
    for(var num = 0; num<topLevelTable.childElementCount;num++){
      let cardHolder = document.getElementById("cell"+num);
        
      //if there are no items in the cell, add in items
      if(cardHolder.hasChildNodes() === false){
        
        //random number between 0 and how many cards are left in the deck
        let rand = Math.floor(Math.random()*cardsOnTable.length);
        let card = cardsOnTable[rand];
        
        //add divs with the correct shape, color, and shading, based on number. All info is from cardsMaster array of objects
        for (var i = 0;i<cardsMaster[card].number;i++){
          let newDiv = document.createElement("DIV");
          newDiv.classList.add(cardsMaster[card].color);
          newDiv.classList.add(cardsMaster[card].shape);
          newDiv.classList.add(cardsMaster[card].shading);
          
          cardHolder.appendChild(newDiv);
        }
          
        //the first child gets the id that is the index of the cardsMaster that cell is on
        //this is used when comparing the cards later
        cardHolder.firstChild.id = card;
        
        //remove that number from cardsInDeck
        cardsOnTable.splice(rand,1);
      }
    }
  },
  dealMoreCards:function(){
    //create three card-holders for three more cards
    let div1 = document.createElement("DIV");
    div1.id = "cell" + topLevelTable.childElementCount;
    div1.classList.add("card-holder");
    let div2 = document.createElement("DIV");
    div2.id = "cell" + (topLevelTable.childElementCount + 1);
    div2.classList.add("card-holder");
    let div3 = document.createElement("DIV");
    div3.id = "cell" + (topLevelTable.childElementCount + 2);
    div3.classList.add("card-holder");
    
    //append new divs to top-level-table
    topLevelTable.append(div1);
    topLevelTable.append(div2);
    topLevelTable.append(div3);
    
    handlers.dealCards();
  }
};