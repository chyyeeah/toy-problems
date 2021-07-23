const find_duplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if ((num - 1) !== i) {
      if (nums[num - 1] === num) return num;
      [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]];
    }
  }
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));