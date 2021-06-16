// Global Variables 👇
var game = new Game();

// Query Selectors 👇
var buttons = document.querySelectorAll('.btn');
var drawDisplay = document.getElementById('drawDisplay');
var gameBoard = document.getElementById('gameBoard');
var headerDisplay = document.getElementById('winnerDisplay');
var playerIcon = document.getElementById('playerIcon');
var playerOneWinCount = document.getElementById('playerOneWins');
var playerTurnDisplay = document.getElementById('playerTurnDisplay');
var playerTwoWinCount = document.getElementById('playerTwoWins');
var newGameBtn = document.getElementById('newGameBtn')
var winnerDisplay = document.getElementById('winnerDisplay');
var winnerIcon = document.getElementById('winnerIcon');

//Event Listeners 👇
window.addEventListener ('load', refreshWins);
gameBoard.addEventListener('click', markTicOrTac);
newGameBtn.addEventListener('click', startOver);

//Event Handlers and Functions 👇
function markTicOrTac(e) {
  game.currentMove = e.target.id;
  if (game.totalPlays % 2 === 0 && game.totalPlays < 9 && e.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerOne);
    displayicon(game.playerOne, e.target);
    playerIcon.src = "assets/hexagon-transparent.png";
    if (game.totalPlays > 4) {
      game.checkWinConditions(game.playerOne);
      game.playerOne.saveWinsToStorage();
      checkForWinAndResetGame();
      game.resetGame();
      refreshWins();
    }
    return;
  }
  if (game.totalPlays % 2 === 1 && game.totalPlays <= 9 && event.target.classList.contains('btn')) {
    game.trackGameBoardPlays(game.playerTwo);
    displayicon(game.playerTwo, e.target);
    playerIcon.src = "assets/circle-transparent.png";
    if (game.totalPlays > 4) {
      game.checkWinConditions(game.playerTwo);
      game.playerTwo.saveWinsToStorage();
      checkForWinAndResetGame();
      game.resetGame();
      refreshWins();
    }
  }
};

function displayicon(player, element) {
  element.innerHTML = `${player.icon}`;
  element.disabled = true;
};

function resetBoard() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = '';
    buttons[i].disabled = false;
    show(playerTurnDisplay);
    hide(drawDisplay);
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

function checkForWinAndResetGame() {
  if (game.winner && game.playerOne.isWinner) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    show(winnerDisplay);
    hide(playerTurnDisplay);
    hide(drawDisplay);
    winnerIcon.src = 'assets/circle-transparent.png';
    playerOneWinCount.innerText = `${game.playerOne.wins} wins`;
    setTimeout(resetBoard, 2700);
    return;
  }
  if (game.winner && game.playerTwo.isWinner) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    show(winnerDisplay);
    hide(playerTurnDisplay);
    hide(drawDisplay);
    winnerIcon.src = 'assets/hexagon-transparent.png';
    playerTwoWinCount.innerText = `${game.playerTwo.wins} wins`;
    setTimeout(resetBoard, 2700);
    return;
  }
  if (!game.winner && game.totalPlays === 9) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    hide(winnerDisplay);
    hide(playerTurnDisplay);
    show(drawDisplay);
    setTimeout(resetBoard, 2700);
    return;
  }
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function startOver() {
  localStorage.clear();
  resetBoard();
  refreshWins();
  game.resetGame();
};
