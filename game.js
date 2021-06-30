class Game {
  constructor() {
    this.playerOne = new Player('one', '<img class="game-board-piece" src="assets/circle-transparent.png" alt="circle">');
    this.playerTwo = new Player('two', '<img class="game-board-piece" src="assets/hexagon-transparent.png" alt="hexagon">');
    this.totalPlays = 0;
    this.winner = false;
    this.currentMove;
  }

  trackGameBoardPlays(currentPlayer) {
    this.totalPlays++;
    currentPlayer.moves.push(parseInt(this.currentMove));
  }

  checkWinConditions(currentPlayer) {
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
      if (currentPlayer.moves.includes(winCombos[i][0]) &&
      currentPlayer.moves.includes(winCombos[i][1]) &&
      currentPlayer.moves.includes(winCombos[i][2])) {
        this.winner = true;
        currentPlayer.isWinner = true;
        currentPlayer.wins++;
      }
    }
  }

  resetGame() {
    this.playerOne = new Player('one', '<img class="game-board-piece" src="assets/circle-transparent.png" alt="circle">');
    this.playerTwo = new Player('two', '<img class="game-board-piece" src="assets/hexagon-transparent.png" alt="hexagon">');
    this.totalPlays = 0;
    this.winner = false;
    this.currentMove;
  }
}
