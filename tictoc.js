var currentPlayer = 'X';
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function mark(row, col) {
  if (board[row][col] == '') {
    board[row][col] = currentPlayer;
    $('#' + row + '-' + col).text(currentPlayer).addClass('marked');
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
    } else if (checkDraw()) {
      alert('Draw!');
    } else {
      currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  // check rows
  for (var i = 0; i < 3; i++) {
    if (board[i][0] != '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      return true;
    }
  }
  // check columns
  for (var j = 0; j < 3; j++) {
    if (board[0][j] != '' && board[0][j] == board[1][j] && board[1][j] == board[2][j]) {
      return true;
    }
  }
  // check diagonals
  if (board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
    return true;
  }
  if (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        return false;
      }
    }
