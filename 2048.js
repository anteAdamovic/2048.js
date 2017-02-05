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
      }
    }
  },

  /*
    1. Read current score value from the 'score' element
    2. Add 'value' to the current score
    3. Output current score value in 'score' element
    <input id='score' type='text' value='0'>
  */
  addScore: function(value) {

  },

  // Called when 'Up' button is clicked
  moveUp: function() {

  },

  // Called when 'Down' button is clicked
  moveDown: function() {

  },

  // Called when '<' button is clicked
  moveLeft: function() {

  },

  // Called when '>' button is clicked
  moveRight: function() {

  },

  /*
    Start a new game
    - clear all game blocks
    - reset score to 0
    - generate 2 random elements
  */
  startNewGame: function() {

  },

  /*
    Should generate a new element (2) at random postion
  */
  generateRandomElement: function() {

  }

};

_2048.renderGameBoard();