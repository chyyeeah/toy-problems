/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const recurse = (remaining) => {
    if (remaining <= 0) return remaining;

    let minResult = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const result = recurse(remaining - coins[i]);
      if (result < 0) continue;
      minResult = Math.min(minResult, result + 1);
    }
    return minResult === Infinity ? -1 : minResult;
  };
  return recurse(amount);
};