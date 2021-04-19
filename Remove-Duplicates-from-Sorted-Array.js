/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  var pointer = 0;

  while (pointer < nums.length - 1) {
      if (nums.slice(pointer + 1, nums.length).indexOf(nums[pointer]) !== -1) {
          nums.splice(pointer, 1);
      } else {
          pointer++;
      }
  }

  return nums.length;
};