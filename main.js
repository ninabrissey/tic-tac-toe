// Global Variables 👇
var game = new Game();
var MAX_PLAYS = 9

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
  var playerOne = game.playerOne
  var playerTwo = game.playerTwo
  var totalPlays = game.totalPlays

  const isBtn = e.target.classList.contains('btn')
  const isEven = totalPlays % 2 === 0
  const isOdd = totalPlays % 2 === 1

  if (isEven && totalPlays < MAX_PLAYS && isBtn) {
    checkPlayerWin(playerOne, e)
    playerIcon.src = "assets/hexagon-transparent.png";

    return;
  }

  if (isOdd && totalPlays <= MAX_PLAYS && isBtn) {
    checkPlayerWin(playerTwo, e)
    playerIcon.src = "assets/circle-transparent.png";
  }
};

function checkPlayerWin(currentPlayer, e) {
  var trackGameBoardPlays = game.trackGameBoardPlays
  var totalPlays = game.totalPlays
  var reset = game.reset
  var checkWinConditions = game.checkWinConditions

  trackGameBoardPlays(currentPlayer);
  displayIcon(currentPlayer, e.target);

  if (totalPlays > 4) {
    checkWinConditions(currentPlayer);
  }


  if (game.winner || totalPlays === 9) {
    currentPlayer.saveWinsToStorage();
    checkForWinAndResetGame();
    reset();
    refreshWins();
  }
}

function displayIcon(player, element) {
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
  const {playerOne} = game
  if (game.winner && playerOne.isWinner) {
    setWinner(playerOne)
    winnerIcon.src = 'assets/circle-transparent.png';
    playerOneWinCount.innerText = `${game.playerOne.wins} wins`;

    return;
  }

  if (game.winner && game.playerTwo.isWinner) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    setWinner(playerTwo)
    winnerIcon.src = 'assets/hexagon-transparent.png';
    playerTwoWinCount.innerText = `${game.playerTwo.wins} wins`;

    return;
  }

  if (!game.winner && game.totalPlays === MAX_PLAYS) {
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

function setWinner() {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    show(winnerDisplay);
    hide(playerTurnDisplay);
    hide(drawDisplay);
    setTimeout(resetBoard, 2700);
}

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
};

function resetGame() {
    game = new Game();
    return game;
};
