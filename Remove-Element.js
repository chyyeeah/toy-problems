/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  // pointer to define current position
  var pointer = 0;
  // current length
  var currentLength = nums.length;

  // iterate over nums while pointer < current length
  while (pointer < currentLength) {
    // if current number equals val,
    if (nums[pointer] === val) {
      // swap elements at pointer and current length - 1
      nums[pointer] = nums[currentLength - 1];
      // decrease current length by 1
      currentLength--;
    } else {
      // increment pointer
      pointer++;
    }
  }

  // return current length
  return currentLength;
};