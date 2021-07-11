/** Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let lowestPrice = Math.min(prices[0], prices[1]);
  let maxProfit = prices[1] - prices[0] < 0 ? 0 : prices[1] - prices[0];

  for (let i = 2; i < prices.length; i++) {
    const price = prices[i];
    maxProfit = Math.max(maxProfit, price - lowestPrice);
    lowestPrice = Math.min(lowestPrice, price);
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([]));
console.log(maxProfit([6]));