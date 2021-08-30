/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];
  for (let i = 2; i <= numRows; i++) {
    const level = new Array(i).fill(1);
    for (let j = 1; j < level.length - 1; j++) {
      level[j] = result[result.length - 1][j - 1] + result[result.length - 1][j];
    }
    result.push(level);
  }
  return result;
};

console.log(generate(1));
console.log(generate(5));