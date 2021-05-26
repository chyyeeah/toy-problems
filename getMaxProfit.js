function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) throw new Error('come on man');
  // Calculate the max profit
  let prevValue;
  let tracker = 0;
  let max;

  for (let i = 0; i < stockPrices.length; i++) {
    if (!prevValue) {
      prevValue = stockPrices[i];
    } else {
      tracker = tracker + stockPrices[i] - prevValue;
      if (!max) max = tracker;
      if (max && tracker > max) max = tracker;
      if (tracker < 0) tracker = 0;
      prevValue = stockPrices[i];
    }
  }

  return max;
}

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) throw new Error('come on man');
  // Calculate the max profit
  let lowestPrice = stockPrices[0];
  let maxProfit;

  for (let i = 1; i < stockPrices.length; i++) {
    const profit = stockPrices[i] - lowestPrice;
    maxProfit = maxProfit || profit;
    if (profit > maxProfit) maxProfit = profit;
    if (stockPrices[i] < lowestPrice) lowestPrice = stockPrices[i];
  }

  return maxProfit;
}