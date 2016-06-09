$(function() {

$('.square').click( function() {
  var $player;
  var id = parseInt(this.id);
  // i need to put the value of the player's into the grid - id
  // get the square by id and put in the text 1 or 2 (player)
  playTurn(id);
  if (player  === 1) {
  $(this).text("❄")
  } else {
  $(this).text("☀");
  }

  $(this).text($player);
  // console.log(grid.join("-"));
  if (whoWon() === 1) {
    alert("Player 1 Won");
  } else if (whoWon() === 2) {
      alert("Player 2 Won");
    }  else if (whoWon() === 3) {
      alert("It is a tie game!");
    }
  })

$("button").click(restart);
  });



var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0];

var player = 1;

function restart () {
  grid = [0, 0, 0,
          0, 0, 0,
          0, 0, 0];
  $('.square').empty();
  player = 1;
}

function isGameOver () {
  if (whoWon()) {
  return true;
} return false;
}

// function gameOver () {
//   return false;
// }

function whoWon () {
  if ((grid[0] === 1) && (grid[1] === 1) && (grid[2] === 1)) {
  // console.log(grid.join("-"))
  return 1; }
  if ((grid[3] === 1) && (grid[4] === 1) && (grid[5] === 1)) {
  return 1; }
  if ((grid[6] === 1) && (grid[7] === 1) && (grid[8] === 1)) {
  return 1; }
  if ((grid[0] === 1) && (grid[3] === 1) && (grid[6] === 1)) {
  return 1; }
  if ((grid[1] === 1) && (grid[4] === 1) && (grid[7] === 1)) {
  return 1; }
  if ((grid[2] === 1) && (grid[5] === 1) && (grid[8] === 1)) {
  return 1; }
  if ((grid[0] === 1) && (grid[4] === 1) && (grid[8] === 1)) {
  return 1; }
  if ((grid[2] === 1) && (grid[4] === 1) && (grid[6] === 1)) {
  return 1; }
    if ((grid[0] === 2) && (grid[1] === 2) && (grid[2] === 2)) {
    return 2; }
    if ((grid[3] === 2) && (grid[4] === 2) && (grid[5] === 2)) {
    return 2; }
    if ((grid[6] === 2) && (grid[7] === 2) && (grid[8] === 2)) {
    return 2; }
    if ((grid[0] === 2) && (grid[3] === 2) && (grid[6] === 2)) {
    return 2; }
    if ((grid[1] === 2) && (grid[4] === 2) && (grid[7] === 2)) {
    return 2; }
    if ((grid[2] === 2) && (grid[5] === 2) && (grid[8] === 2)) {
    return 2; }
    if ((grid[0] === 2) && (grid[4] === 2) && (grid[8] === 2)) {
    return 2; }
    if ((grid[2] === 2) && (grid[4] === 2) && (grid[6] === 2)) {
    return 2; }
  var total = 0;
  for (i=0; i < grid.length; ++i) {
    total = total + grid[i];
  }
  if (total === 13) {
  return 3
  }  else {
  return 0
  }
}
// if grid is not full, return 0
// if player 1 (sum of combination is 3) win return 1
// if player 2 win (sum of combination is 6) return 2
// else draw return 3

function playTurn (index) {
  //assign the square to player 1, if taken, return false.
  //return true if can assign to player 1
  // after square is assigned to player 1, end turn and start player 2
  if (grid[index] === 0) {
    (grid[index] = player)
    // check if is player 1, then change to player to 2
    // if is player 2, change to player 1
    if (player === 1) {
      player = 2;
    } else {
      player = 1;
    }
    return true;
  } else {
    return false
  }
}
