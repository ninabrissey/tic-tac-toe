// Global Variables 👇
var game = new Game();

// Query Selectors 👇
var gameBoard = document.getElementById('gameBoard');

//Event Listeners 👇
gameBoard.addEventListener('click', function(e) {
  markTicOrTac(e)
});

//Event Handlers and Functions
//ASK ANNIE about this 👇
function markTicOrTac(e) {
  game.currentMove = e.target.id;
  if (game.totalPlays % 2 === 0 && game.totalPlays < 9 && e.target.classList.contains('btn')) {
      game.trackGameBoardPlays(game.playerOne);
      displayToken(game.playerOne);
      game.checkWinConditions(game.playerOne);
      game.playerOne.saveWinsToStorage();
      return;
  }

  if (game.totalPlays % 2 === 1 && game.totalPlays <= 9 && event.target.classList.contains('btn')) {
      game.trackGameBoardPlays(game.playerTwo);
      displayToken(game.playerTwo);
      game.checkWinConditions(game.playerTwo);
      game.playerTwo.saveWinsToStorage();
  }
};

//Can I pass the event in here as well from the function that this function invoked within instead of doing the query selector  ---  grab Justin's code from slack
function displayToken(player) {
  var buttonClicked = document.getElementById(game.currentMove);
  buttonClicked.innerHTML = `${player.token}`;
  buttonClicked.disabled = true;
};


// displayNewGame() {
//
// };
