/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // console.log(board);
  // iterate through the board
    // collect information about what's around it
    // update the current element with a tuple [oldState, newState]
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const current = board[row][col];
      let state = 0;
      for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
          if (board[row + y] !== undefined && board[row + y][col + x] !== undefined) {
            /**
             * doesn't work as intended when I use
             * if (x !== 0 && y !== 0)
             */
            if (x === 0 && y === 0) continue;
            const cell = board[row + y][col + x];
            // integer
            if (typeof cell === 'number') state += cell;
            // tuple element
            if (Array.isArray(cell)) state += cell[0];
          }
        }
      }

      // if state < 2 or state > 3 => 0
      // if state === 3 => 1
      // current === 1 && state is 2 => 1
      if (state < 2 || state > 3) {
        board[row][col] = [current, 0];
      } else if (state === 3) {
        board[row][col] = [current, 1];
      } else {
        board[row][col] = [current, current];
      }
    }
  }

  // iterate through the board to update each element with the newState
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      board[row][col] = board[row][col][1];
    }
  }
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board);
console.log(board);
board = [[1,1],[1,0]]
gameOfLife(board);
console.log(board);