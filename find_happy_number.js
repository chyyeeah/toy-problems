const squareOfAllDigits = (num) => {
  const stringifiedNum = num.toString();
  let sum = 0;
  stringifiedNum.split('').forEach(num => {
    sum += num ** 2;
  });

  return sum;
};

const find_happy_number = function(num) {
  let slow = squareOfAllDigits(num),
    fast = squareOfAllDigits(slow);

  while (slow !== fast) {
    if (fast === 1) return true;
    slow = squareOfAllDigits(slow);
    fast = squareOfAllDigits(squareOfAllDigits(fast));
  }

  return false;
};


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
