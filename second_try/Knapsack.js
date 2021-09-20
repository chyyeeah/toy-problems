let solveKnapsack = function (profits, weights, capacity) {
  const dp = [];
  const recurse = (remaining, profit, idx) => {
    if (dp[idx] && dp[idx][remaining] !== undefined) {
      return dp[idx][remaining];
    }
    let max = profit;

    for (let i = idx; i < weights.length; i++) {
      const weight = weights[i];
      if (remaining - weight >= 0) {
        max = Math.max(max, recurse(remaining - weight, profit + profits[i], i + 1));
      }
    }
    if (!dp[idx]) dp[idx] = {};
    dp[idx][remaining] = max;
    return dp[idx][remaining];
  };
  return recurse(capacity, 0, 0);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
// profits = [60,100,120];
// weights = [10,20,30];
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 50)}`);
profits = [55,10,47,5,4,50,8,61,85,87];
weights = [95,4,60,32,23,72,80,62,65,46];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 269)}`);
profits = [44,46,90,72,91,40,75,35,8,54,78,40,77,15,61,17,75,29,75,63];
weights = [92,4,43,83,84,68,92,82,6,44,32,18,56,83,25,96,70,48,14,58];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 878)}`);