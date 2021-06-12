class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  };

  saveWinsToStorage() {
    localStorage.clear();
    var key = JSON.stringify(this.id);
    var playerStringified = JSON.stringify(this);
    localStorage.setItem(key, playerStringified);
  };

  retrieveWinsFromStorage() {
    var key = JSON.stringify(this.id);
    var retrievedWins = localStorage.getItem(key);
    //will need to parseInt the value of the key to get the actual number 
  };
};
