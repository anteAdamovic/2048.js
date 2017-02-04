var _2048 = {

  /*
    Generate game board blocks dynamically using Javascript DOM
    Create 16 divs and append set classes to them (game-board-block and x-y coordinates)
    -------------------------
    | 0-0 | 0-1 | 0-2 | 0-3 |
    -------------------------
    | 1-0 | 1-1 | 1-2 | 1-3 |
    -------------------------
    | 2-0 | 2-1 | 2-2 | 2-3 |
    -------------------------
    | 3-0 | 3-1 | 3-2 | 3-3 |
    -------------------------
  */
  renderGameBoard: function() {
    var container = document.getElementsByClassName('game-board')[0];

    for(var x = 0; x < 4; x++) {
      for(var y = 0; y < 4; y++) {
        var div = document.createElement('div');
        div.className = 'game-board-block ' + x + '-' + y;

        container.appendChild(div);
        console.log('Appending child ', div);
      }
    }
  },

  addScore: function(value) {

  },

  moveUp: function() {

  },

  moveDown: function() {

  },

  moveLeft: function() {

  },

  moveRight: function() {

  },

  startGame: function() {

  },

  generateRandomElement: function() {

  },

  restart: function() {
    
  }

};

_2048.renderGameBoard();