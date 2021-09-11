const find_first_k_missing_positive = function (nums, k) {
  const missingNumbers = [];
  const extraPositive = new Set();

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - 1 !== i) {
      if (nums[i] <= 0) break;
      if (nums[i] > nums.length) {
        extraPositive.add(nums[i]);
        break;
      }
      if (nums[i] === nums[nums[i] - 1]) break;
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      missingNumbers.push(i + 1);
      k--;
    }
    if (k <= 0) break;
  }

  let n = nums.length + 1;

  while (k > 0) {
    while (extraPositive.has(n)) {
      n++;
    }
    missingNumbers.push(n);
    n++;
    k--;
  }

  return missingNumbers;
};

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));