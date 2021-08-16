const isStrobo = (str) => {
  // 0:0, 1:1, 6:9, 8:8:, 9:6
  // check if palidrome
  // middle can't be 6 or 9

  const valid = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' },
    mid = Math.floor(str.length / 2);

  for (let i = 0; i < mid; i++) {
    const left = str[i],
      right = str[str.length - 1 - i];

    if (!valid[left]) return false;
    if (valid[left] !== right) return false;
  }

  if (str.length % 2 === 1 && ['0', '1', '8'].indexOf(str[mid]) < 0) {
    return false;
  }

  return true;
};

// console.log(isStrobo('69'));
// console.log(isStrobo('96'));
// console.log(isStrobo('121'));
// console.log(isStrobo('619'));

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  const result = [], valid = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6 ' };
  let str = '1';
  for (let i = 1; i < n; i++) {
    str += 0;
  }

  while (str.length === n) {
    if (valid[str[0]] && isStrobo(str)) {
      result.push(str);
    }

    str = `${parseInt(str) + 1}`;
  }

  if (n === 1) result.push('0');

  return result;
};

// console.log(findStrobogrammatic(1));
// console.log(findStrobogrammatic(2));
// console.log(findStrobogrammatic(3));
console.log(findStrobogrammatic(4));