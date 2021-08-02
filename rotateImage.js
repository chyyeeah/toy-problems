/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const layers = Math.floor(matrix.length / 2);
  for (let layer = 0; layer < layers; layer++) {
    for (let i = layer; i < matrix.length - 1 - layer; i++) {
      const top = matrix[layer][i];
      const right = matrix[i][matrix.length - 1 - layer];
      const bottom = matrix[matrix.length - 1 - layer][matrix.length - 1 - i];
      const left = matrix[matrix.length - 1 - i][layer];
      matrix[i][matrix.length - 1 - layer] = top;
      matrix[matrix.length - 1 - layer][matrix.length - 1 - i] = right;
      matrix[matrix.length - 1 - i][layer] = bottom;
      matrix[layer][i] = left;
    }
  }
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix);
matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);
console.log(matrix);
matrix = [[1]];
rotate(matrix);
console.log(matrix);
matrix = [[1,2],[3,4]];
rotate(matrix);
console.log(matrix);