/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = {};
  const recurse = (remaining) => {
    if (dp[remaining]) return dp[remaining];
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const result = recurse(remaining - coins[i]);
      if (result >= 0) min = Math.min(min, result);
    }
    dp[remaining] = min === Infinity ? -1 : min + 1;
    return dp[remaining];
  };
  return recurse(amount);
};

/**BFS */
// var coinChange = function (coins, amount) {
//   if (amount === 0) return 0;
//   const queue = [];
//   for (let i = 0; i < coins.length; i++) {
//     const coin = coins[i];
//     if (amount - coin >= 0) queue.push([amount - coin, 1]);
//   }

//   while (queue.length > 0) {
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const [remaining, num] = queue.shift();
//       if (remaining === 0) return num;
//       for (let j = 0; j < coins.length; j++) {
//         const coin = coins[j];
//         if (remaining - coin >= 0) {
//           queue.push([remaining - coin, num + 1]);
//         }
//       }
//     }
//   }
//   return -1;
// };

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([1, 2, 5], 100));