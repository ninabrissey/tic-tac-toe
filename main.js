// Global Variables 👇
var game = new Game();

// Query Selectors 👇
var gameBoard = document.getElementById('gameBoard');
var buttons = document.querySelectorAll('.btn');

// Event Listeners 👇
gameBoard.addEventListener('click', markTicOrTac);
window.addEventListener ('load', refreshWins);

// Event Handlers and Functions 👇
function markTicOrTac(e) {
  game.currentMove = e.target.id;
  if (game.totalPlays % 2 === 0 && game.totalPlays < 9 && e.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerOne);
    displayToken(game.playerOne, e.target);
    game.checkWinConditions(game.playerOne);
    game.playerOne.saveWinsToStorage();
    game.playerTwo.saveWinsToStorage();
    game.resetGame();
    resetBoard();
    return;
  }

  if (game.totalPlays % 2 === 1 && game.totalPlays <= 9 && event.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerTwo);
    displayToken(game.playerTwo, e.target);
    game.checkWinConditions(game.playerTwo);
    game.playerOne.saveWinsToStorage();
    game.playerTwo.saveWinsToStorage();
    game.resetGame();
    resetBoard();
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
    }
  }
  refreshWins();
};

function refreshWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
};
