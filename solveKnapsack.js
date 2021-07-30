let solveKnapsack = function(profits, weights, capacity) {
  let maxProfit = 0;
  const recursive = (pointer, space, profit) => {
    if (space < 0) return;
    maxProfit = Math.max(maxProfit, profit);

    while (pointer < weights.length) {
      const itemProfit = profits[pointer],
        itemWeight = weights[pointer];
      recursive(pointer + 1, space - itemWeight, profit + itemProfit);
      pointer++;
    }
  };
  recursive(0, capacity, 0);
  return maxProfit;
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);