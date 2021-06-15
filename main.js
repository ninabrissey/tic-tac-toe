// Global Variables 👇
var game = new Game();

// Query Selectors 👇
var gameBoard = document.getElementById('gameBoard');
var buttons = document.querySelectorAll('.btn');
var headerDisplay = document.getElementById('playerTurnIcon');
var playerOneWinCount = document.getElementById('playerOneWins');
var playerTwoWinCount = document.getElementById('playerTwoWins');

//Event Listeners 👇
gameBoard.addEventListener('click', markTicOrTac);
window.addEventListener ('load', refreshWins);

//Event Handlers and Functions 👇
function markTicOrTac(e) {
  game.currentMove = e.target.id;
  if (game.totalPlays % 2 === 0 && game.totalPlays < 9 && e.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerOne);
    displayToken(game.playerOne, e.target);
    game.checkWinConditions(game.playerOne);
    game.playerOne.saveWinsToStorage();
    resetBoard();
    game.resetGame();
    refreshWins();
    return;
  }

  if (game.totalPlays % 2 === 1 && game.totalPlays <= 9 && event.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerTwo);
    displayToken(game.playerTwo, e.target);
    game.checkWinConditions(game.playerTwo);
    game.playerTwo.saveWinsToStorage();
    resetBoard();
    game.resetGame();
    refreshWins();
  }
};

function displayToken(player, element) {
  element.innerHTML = `${player.token}`;
  element.disabled = true;
};

function resetBoard() {
  if (game.winner || game.draw) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = '';
      buttons[i].disabled = false;
      // Add the <h1 innerText here> to change the inner text
    }
  }
};

function refreshWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
};

// function displayWinner ()
//   if (game.winner && game.playerOne.isWinner) {
//  headerDisplay.innerHTML = `<div>it's</div><img class="player-turn-icon" src="assets/circle-transparent.png" alt"circle"/><div>'s turn</div>`
    // setTimeout(resetBoard, 3500);
//     return;
//   }
//   if (game.winner && game.playerTwo.isWinner) {
// headerDisplay.innerHTML = `<div>it's</div><img class="player-turn-icon" src="assets/hexagon-transparent.png" alt"hexagon"/><div>'s turn</div>`
    // setTimeout(resetBoard, 3500);
//     return;
//   }
//   if (game.draw && !game.winner) {
// `<div>it's a draw... play again!</div>`
    // setTimeout(resetBoard, 3500);
//
//   }
