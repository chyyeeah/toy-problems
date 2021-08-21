/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0,
    low = prices[0],
    high = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < high) {
      profit += (high - low);
      low = high = price;
    } else if (price > low) {
      high = price;
    } else {
      low = high = price;
    }
  }

  if (prices[prices.length - 1] > low) {
    profit += (prices[prices.length - 1] - low);
  }

  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([7,1,5,3,6,4,8]));
