/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = {};
  const recurse = (remaining) => {
    if (remaining <= 0) return remaining;
    if (dp[remaining] !== undefined) return dp[remaining];

    let minResult = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const result = recurse(remaining - coins[i]);
      if (result < 0) continue;
      minResult = Math.min(minResult, result + 1);
    }
    dp[remaining] = minResult === Infinity ? -1 : minResult;
    return dp[remaining];
  };
  return recurse(amount);
};

// var coinChange = function (coins, amount) {
//   const recurse = (remaining) => {
//     if (remaining <= 0) return remaining;

//     let minResult = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//       const result = recurse(remaining - coins[i]);
//       if (result < 0) continue;
//       minResult = Math.min(minResult, result + 1);
//     }
//     return minResult === Infinity ? -1 : minResult;
//   };
//   return recurse(amount);
// };

console.log(coinChange([1,2,5], 11));
console.log(coinChange([186,419,83,408], 6249));