/*
    Add event listener for keyboard events to allow player
    to use up, down, left and right keys along with on-screen buttons
*/
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    switch(key) {
        // Up
        case 38:
            _2048.moveUp();
            break;
        // Down
        case 40:
            _2048.moveDown();
            break;
        // Left
        case 37:
            _2048.moveLeft();
            break;
        // Right
        case 39:
            _2048.moveRight();
            break;
        // Anything else
        default:
            break;
    }
}    

var _2048 = {
    gameFieldArray: null,

    initialize: function() {
        this.generateGameFieldArray();
        this.generateGameBoard();
    },

    /*
        Generate 2D array which will be used to store game data
        a) initialize gameFieldArray as an Array
        b) create 4 elements inside the array and initialize each as an Array
        c) when initializing 2nd level arrays, create 4 elements inside each and set them to 0
        In the end we need to have an array of 4 arrays, and each of those has to have 4 integers inside (0)
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    */
    generateGameFieldArray: function() {
        this.gameFieldArray = new Array();

        for(var x = 0; x < 4; x++) {            
            this.gameFieldArray[x] = new Array();

            for(var y = 0; y < 4; y++) {
                this.gameFieldArray[x][y] = 0;
            }
        }

        console.log('GameFieldArray - ', this.gameFieldArray);
    },

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
    generateGameBoard: function() {
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
        var scoreElement = document.getElementById('score');
        var score = parseInt(scoreElement.value);
        console.log('Current score: ', score);

        score += value;
        scoreElement.value = score;
        console.log('New score: ', score);
    },

    // Called when 'Up' button is clicked
    moveUp: function() {
        console.log('Moving up!');
    },

    // Called when 'Down' button is clicked
    moveDown: function() {
        console.log('Moving down!');
    },

    // Called when '<' button is clicked
    moveLeft: function() {
        console.log('Moving left!');
    },

    // Called when '>' button is clicked
    moveRight: function() {
        console.log('Moving right!');
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

_2048.initialize();
_2048.addScore(2);