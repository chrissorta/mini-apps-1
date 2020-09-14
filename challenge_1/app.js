
// Variables to track state/model

// board state
const winningCombo = [['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']
  , ['1', '5', '9'], ['3', '5', '7']];
let moves = 0;
let currentPlayer = 'X';
let recentWinner = '' || 'X';

// x state
let xBank = [];
let xTotalWins = 0;

// o state
let oBank = [];
let oTotalWins = 0;

//Event Handlers
let board = document.getElementById('board');
board.addEventListener('click', function (e) {

  if (isLegalMove(e.target.id.toString())) {
    placePiece(e);
    addScore(currentPlayer, e.target.id);
    checkWinner();
    changePlayer();
  }

})

button = document.getElementById('button');
button.addEventListener('click', function () {
  resetBoard();

})



//########################################
// Functions to change view

// Place piece on the board
var placePiece = (e) => {
  el = document.getElementById(e.target.id);
  el.innerHTML = currentPlayer;
}

// Update tally of winner
var winnerTally = () => {
  xEl = document.getElementById("xWins");
  xEl.innerHTML = "X: " + xTotalWins;
  oEl = document.getElementById("oWins");
  oEl.innerHTML = "O: " + oTotalWins;

}


//########################################

// Functions to change game state -- controllers

// check if a player matches to one winning combo
var winMatch = (arr1, winningArray) => {
  for (let i = 0; i < winningArray.length; i++) {
    if (arr1.indexOf(winningArray[i]) === -1) {
      return false;
    }
  }
  return true;
}

// check the players against all possible winning combinations
var checkWinner = () => {
  let didWin = false;
  for (let i = 0; i < winningCombo.length; i++) {
    if (winMatch(xBank, winningCombo[i])) {
      alert('X won the game');
      recentWinner = 'X';
      xTotalWins++;
      winnerTally();
      didWin = true;
      break;
    } else if (winMatch(oBank, winningCombo[i])) {
      alert('O won the game');
      recentWinner = 'O';
      oTotalWins++;
      winnerTally();
      didWin = true;
      break;

    }
  }
  if (moves === 9 && !didWin) {
    alert("Tied Game");
  }
}

// Checks if there is already an X or O on the board
var isLegalMove = (value) => {
  if (xBank.indexOf(value) !== -1 || oBank.indexOf(value) !== -1) {
    return false;
  }
  return true;
}

// Change who the current player is
var changePlayer = () => {

  if (currentPlayer === 'X') {
    currentPlayer = 'O';
    return 'O';
  } else {
    currentPlayer = 'X';
    return 'X';
  }
}

// Track where the player placed their mark
var addScore = (player, value) => {
  if (player === 'X') {
    xBank.push(value);
    xBank = xBank.sort();
  } else {
    oBank.push(value);
    oBank = oBank.sort();
  }
  moves++;
}

// Reset state
var resetBoard = () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
  xBank = [];
  oBank = [];
  currentPlayer = recentWinner;
  moves = 0;
}

