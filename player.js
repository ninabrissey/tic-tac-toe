class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.isWinner = false;
    this.moves = [];
  };

  saveWinsToStorage() {
    var playerId = JSON.stringify(this.id);
    var winTotal = JSON.stringify(this.wins);
    // if (winTotal === null) {
    //   winTotal = '0';
    // }
    localStorage.setItem(playerId, winTotal);
  };

  retrieveWinsFromStorage() {
    var playerId = JSON.stringify(this.id);
    var retrievedWins = JSON.parse(localStorage.getItem(playerId));
    this.wins = retrievedWins;
    if (this.wins === null) {
      this.wins = '0';
    }
  };

};
