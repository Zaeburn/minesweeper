document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  get cells () {
    let cellArray = [];
    let totalCells = 36; // set size of grid by total number of cells
    // generate a X * Y grid of cells
    //
    // repeat inner loop on a next row until board size reached
    for (let cellRow = 0; cellArray.length < totalCells; cellRow++) {
      // iterate new cells accross the row
      for (cellCol = 0; cellCol < Math.sqrt(totalCells); cellCol++) {
        // let cell = {row: cellRow, col: cellCol, isMine: false};
        cellArray.push({row: cellRow, col: cellCol, isMine: false, hidden: false});
      }
    }
    return cellArray;
  },
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

