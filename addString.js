/**Add Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = '',
    carryover = 0,
    offset = 0;

  while (offset < num1.length || offset < num2.length || carryover) {
    const int1 = parseInt(num1[num1.length - 1 - offset] || 0);
    const int2 = parseInt(num2[num2.length - 1 - offset] || 0);
    const sum = int1 + int2 + carryover;
    carryover = 0;
    if (sum < 10) {
      result = sum.toString() + result;
    } else {
      const stringifiedSum = sum.toString();
      result = stringifiedSum[1] + result;
      carryover = 1;
    }
    offset++;
  }
  return result;
};

console.log(addStrings('11111111111111111111111111111111155', '112'));
console.log(addStrings('0', '0'));
