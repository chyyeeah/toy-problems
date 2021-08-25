/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let counter = 0;
  if (n === 2) counter++;
  if (n >= 3) counter += 2;
  for (let i = 5; i <= n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      counter++;
    }
  }
  return counter;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
console.log(countPrimes(200));