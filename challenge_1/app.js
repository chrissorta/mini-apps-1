
// Variables to track state

const winningCombo = [['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','2','3'], ['4','5','6'], ['7','8','9']
, ['1','5','9'], ['3','5','7']];
let moves = 0;

var currentPlayer = 'X';
let xBank = [];
let oBank = [];

//Event Handlers -- controllers
let board = document.getElementById('board');
board.addEventListener('click', function(e){

  if(isLegalMove(e.target.id.toString())) {
    el = document.getElementById(e.target.id);
    el.innerHTML = currentPlayer;
  moves++;
  addScore(currentPlayer, e.target.id);
  changePlayer();
  checkWinner();
}

})

button = document.getElementById('button');
button.addEventListener('click', function() {
  for(let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
  resetBoard();

})

// Functions to change game state
var arrayMatch = (arr1, winningArray) => {
 for(let i = 0; i < winningArray.length; i++) {
   if(arr1.indexOf(winningArray[i]) === -1) {
     return false;
   }
 }
 return true;
}

var checkWinner = () => {

  for(let i = 0; i < winningCombo.length; i++) {
    if(arrayMatch(xBank, winningCombo[i])) {
      console.log('hi');
      alert('X won the game');
    }
    if(arrayMatch(oBank, winningCombo[i])) {
      alert('O won the game');
    }
  }
  if(moves === 9) {
    alert("Tied Game");
  }
}

var isLegalMove = (value) => {
  if(xBank.indexOf(value) !== -1 || oBank.indexOf(value) !== -1) {
    return false;
  }
  return true;
}

var changePlayer = () => {

  if(currentPlayer === 'X') {
    currentPlayer = 'O';
    return 'O';
  } else {
    currentPlayer = 'X';
    return 'X';
  }
}

var addScore = (player, value) => {
  if(player === 'X') {
    xBank.push(value);
    xBank = xBank.sort();
  } else {
    oBank.push(value);
    oBank = oBank.sort();
  }
}

var resetBoard = () => {

  xBank = [];
  oBank = [];
  currentPlayer = 'X';
  moves = 0;
}

