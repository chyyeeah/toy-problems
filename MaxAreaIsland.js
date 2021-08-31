const calcArea = (grid, row, col) => {
  let area = 0;
  if (!grid[row][col]) return area;

  grid[row][col] = 0;
  area++;

  if (grid[row - 1] && grid[row - 1][col]) {
    area += calcArea(grid, row - 1, col);
  }

  if (grid[row + 1] && grid[row + 1][col]) {
    area += calcArea(grid, row + 1, col);
  }

  if (grid[row][col - 1]) {
    area += calcArea(grid, row, col - 1);
  }
  if (grid[row][col + 1]) {
    area += calcArea(grid, row, col + 1);
  }

  return area;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        const currentArea = calcArea(grid, row, col);
        max = Math.max(max, currentArea);
      }
    }
  }
  return max;
};

console.log(calcArea([
  [0,1,1],
  [1,1,0],
  [0,1,1]
], 0, 1));

let grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid));
grid = [[0,0,0,0,0,0,0,0]];
console.log(maxAreaOfIsland(grid));
