class Game {
  constructor() {
    this.playerOne = new Player('one', '<img class="game-board-piece" src="assets/circle-transparent.png" alt="circle">');
    this.playerTwo = new Player('two', '<img class="game-board-piece" src="assets/hexagon-transparent.png" alt="hexagon">');
    this.totalPlays = 0;
    this.currentMove;
  }
  //
  // trackGameBoardPlays() {
  //   var button = event.target;
  //   this.totalPlays++;
  //   if (this.totalPlays % 2 === 1 && this.totalPlays < 9 && button.classList.contains('btn')) {
  //     this.playerOne.moves.push(parseInt(button.id));
  //     button.innerHTML = `${this.playerOne.token}`;
  //     button.disabled = true;
  //   } else if (this.totalPlays <= 9){
  //     this.playerTwo.moves.push(parseInt(button.id));
  //     button.innerHTML = `${this.playerTwo.token}`;
  //     button.disabled = true;



  trackGameBoardPlays(player) {
      this.totalPlays++;
      player.moves.push(parseInt(this.currentMove));

      //the disabling of the button needs to happen on the dom as does the showing up of the winConditions//do I need to pass in an event here? I think I do
  };

  checkWinConditions(player) {
    var winCombos = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    for (var i = 0; i < winCombos.length; i++) {
        if (player.moves.indexOf(winCombos[i][0], winCombos[i][1], winCombos[i][2]) === 2) {
          console.log('winCombos', winCombos)
          console.log(player.moves.indexOf(winCombos[i][0], winCombos[i][1], winCombos[i][2]))
          console.log ('winner')
    }
  }
};

}

    //will check for win checkWinConditions
    //maybe also add the draw here or in another function
    //if win is true, player.wins++ (player referring to the player from the Player class)
//
//   resetGame() {
//     //Do I just essentially refresh the page so not and the render the winning data from storage, so no event.preventDefault();
//   };
// };
