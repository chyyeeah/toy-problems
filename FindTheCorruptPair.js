const find_corrupt_numbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - 1 !== i) {
      if (nums[i] === nums[nums[i] - 1]) break;
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) return [nums[i], i + 1];
  }
};

console.log(find_corrupt_numbers([3,1,2,5,2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));