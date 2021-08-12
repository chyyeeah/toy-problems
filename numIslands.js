/**
 * @param {character[][]} grid
 * @return {number}
 */
/**DFS */
var numIslands = function (grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const current = grid[row][col];

      if (current === '1') {
        count++;
        const stack = [[row, col]];

        while (stack.length > 0) {
          const [y, x] = stack.pop();
          grid[y][x] = '2';

          if (grid[y - 1] && grid[y - 1][x] === '1') {
            stack.push([y - 1, x]);
          }

          if (grid[y + 1] && grid[y + 1][x] === '1') {
            stack.push([y + 1, x]);
          }

          if (grid[y][x - 1] === '1') {
            stack.push([y, x - 1]);
          }

          if (grid[y][x + 1] === '1') {
            stack.push([y, x + 1]);
          }
        }
      }
    }
  }

  return count;
};

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid));
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid));
