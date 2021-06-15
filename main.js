// Global Variables 👇
var game = new Game();

// Query Selectors 👇
var gameBoard = document.getElementById('gameBoard');
var buttons = document.querySelectorAll('.btn');
var headerDisplay = document.getElementById('winnerDisplay');
var playerOneWinCount = document.getElementById('playerOneWins');
var playerTwoWinCount = document.getElementById('playerTwoWins');
var playerTurnDisplay = document.getElementById('playerTurnDisplay');
var winnerDisplay = document.getElementById('winnerDisplay');
var winnerIcon = document.getElementById('winnerIcon');
var playerIcon = document.getElementById('playerIcon');

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
    playerIcon.src = "assets/hexagon-transparent.png";
    displayWinner();
    game.resetGame();
    refreshWins();
    return;
  }

  if (game.totalPlays % 2 === 1 && game.totalPlays <= 9 && event.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerTwo);
    displayToken(game.playerTwo, e.target);
    game.checkWinConditions(game.playerTwo);
    game.playerTwo.saveWinsToStorage();
    playerIcon.src = "assets/circle-transparent.png";
    displayWinner();
    game.resetGame();
    refreshWins();
  }
};

function displayToken(player, element) {
  element.innerHTML = `${player.token}`;
  element.disabled = true;
};

function resetBoard() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = '';
    buttons[i].disabled = false;
    show(playerTurnDisplay);
    hide(winnerDisplay);
    playerIcon.src = "assets/circle-transparent.png";
  }
};

function refreshWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  playerOneWinCount.innerText = `${game.playerOne.wins} wins`;
  playerTwoWinCount.innerText = `${game.playerTwo.wins} wins`;
};

function displayWinner() {
  if (game.winner && game.playerOne.isWinner) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    show(winnerDisplay);
    hide(playerTurnDisplay);
    winnerIcon.src = 'assets/circle-transparent.png';
    playerOneWinCount.innerText = `${game.playerOne.wins} wins`;
    setTimeout(resetBoard, 3500);
    return;
  }
  if (game.winner && game.playerTwo.isWinner) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    show(winnerDisplay);
    hide(playerTurnDisplay);
    winnerIcon.src = 'assets/hexagon-transparent.png';
    playerTwoWinCount.innerText = `${game.playerTwo.wins} wins`;
    setTimeout(resetBoard, 3500);
    return;
  }
  if (game.totalPlays === 9) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    show(winnerDisplay);
    hide(playerTurnDisplay);
    winnerDisplay.innerHTML = '<div>it\'s a draw... play again!</div>';
    setTimeout(resetBoard, 3500);
    return
  }
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};
