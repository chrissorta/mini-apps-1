
const winningCombo = [['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','2','3'], ['4','5','6'], ['7','8','9']
, ['1','5','9'], ['3','5','7']];
let moves = 0;

var currentPlayer = 'X';
let xBank = [];
let oBank = [];

let board = document.getElementById('board');
board.addEventListener('click', function(e){
  console.log(e.target.id);
  el = document.getElementById(e.target.id);
  el.innerHTML = currentPlayer;
  moves++;
  addScore(currentPlayer, e.target.id);
  console.log('x score: ',xBank)
  console.log('o score: ',oBank)
  changePlayer();

  xBank = xBank.sort();
  oBank = oBank.sort();

  for(let i = 0; i < winningCombo.length; i++) {
    // console.log(winningCombo[i]);
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

})

button = document.getElementById('button');
button.addEventListener('click', function() {
  for(let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
  }
  xBank = [];
  oBank = [];
  currentPlayer = 'X';
  moves = 0;
})

var arrayMatch = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
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
  } else {
    oBank.push(value);
  }
}

