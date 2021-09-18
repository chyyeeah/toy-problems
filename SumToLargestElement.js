const sumToLargestElement = (arr) => {
  let max = -Infinity, idx;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      idx = i;
    }
  }

  const dp = new Array(arr.length).fill(0).map(() => {return {}});
  const recurse = (remaining, i) => {
    if (dp[i][remaining] !== undefined) {
      console.log(dp[i][remaining]);
      return dp[i][remaining];
    }
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;
    for (let j = i; j < arr.length; j++) {
      if (j === idx) continue;
      const result = recurse(remaining - arr[j], j + 1);
      if (!dp[j]) dp[j] = {};
      dp[j][remaining] = result;
      if (result === 0) return dp[j][remaining];
    }
    return -1
  };

  return recurse(max, 0) === 0;
};

// console.log(sumToLargestElement([2,3,4,5]));
console.log(sumToLargestElement([1,2,3,5]));
console.log(sumToLargestElement([2,4,5,7,8,22]));