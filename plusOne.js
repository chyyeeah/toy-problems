/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [...digits];
  let p = digits.length - 1,
    carry = 1;

  while (p >= 0) {
    let sum = carry;
    carry = 0;

    sum += result[p];

    if (sum > 9) {
      carry = 1;
      sum %= 10;
    }
    result[p] = sum;
    p--;
  }

  if (carry) {
    result.unshift(carry)
  };

  return result;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9,9]));
