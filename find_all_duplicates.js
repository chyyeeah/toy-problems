const find_all_duplicates = function(nums) {
  const hashSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    while ((nums[i] - 1) !== i) {
      const num = nums[i];
      if (num === nums[num-1]) {
        hashSet.add(num);
        break;
      }
      [nums[i], nums[num-1]] = [nums[num-1], nums[i]];
    }
  }

  return Array.from(hashSet);
};

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));