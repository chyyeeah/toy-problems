let solveKnapsack = function (profits, weights, capacity) {
  const recurse = (remaining, profit, idx) => {
    let max = profit;

    for (let i = idx; i < weights.length; i++) {
      const weight = weights[i];
      if (remaining - weight >= 0) {
        max = Math.max(max, recurse(remaining - weight, profit + profits[i], i + 1));
      }
    }

    return max;
  };
  return recurse(capacity, 0, 0);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);