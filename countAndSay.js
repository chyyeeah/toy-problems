const counter = (string) => {
  let pointer = 0,
    tracker = 0,
    result = '';

  while (pointer < string.length) {
    const currentNumber = string[pointer];
    while (currentNumber === string[pointer]) {
      tracker++;
      pointer++;
    }
    result += `${tracker}${currentNumber}`;
    tracker = 0;
  }

  return result;
};

console.log(counter('111244333'));

/**Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';

  const interpreter = (level, outcome) => {
    if (level > n) return outcome;
    return interpreter(level + 1, counter(outcome));
  };

  return interpreter(2, '1');
};

var countAndSay = function (n) {
  if (n === 1) return '1';

  let result = '1',
    tracker = 2;
  while (tracker <= n) {
    result = counter(result);
    tracker++;
  }
  return result;
};

console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));