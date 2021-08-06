/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    while (nums[i] === 2 && i < right) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
    }

    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }
  }
};

let nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);
nums = [2,0,1];
sortColors(nums);
console.log(nums);
nums = [0];
sortColors(nums);
console.log(nums);
nums = [1];
sortColors(nums);
console.log(nums);
nums = [2,2,2,2,2,2];
sortColors(nums);
console.log(nums);