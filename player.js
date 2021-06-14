class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || 0;
    this.moves = [];
    this.winner = false;
  };

// this is saving all information. Is that what you want to do
  saveWinsToStorage() {
    var key = JSON.stringify(this.id);
    var playerStringified = JSON.stringify(this);
    localStorage.removeItem(key);
    localStorage.setItem(key, playerStringified);
  };

  retrieveWinsFromStorage() {
    var key = JSON.stringify(this.id);
    var retrievedWins = localStorage.getItem(key);
    //will need to parseInt the value of the key to get the actual number
  };
};

//what do I need to send to localStorage
//what is the cleanest way to send everything to local storage

//resinstantiate player one and two,
