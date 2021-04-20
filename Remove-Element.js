/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  // define a pointer to indicate current position within array
  var pointer = 0;

  // iterate over nums with while loop if pointer is not at the end of the array
  while (pointer < nums.length) {
    // if number equals val,
    if (nums[pointer] === val) {
      // remove the number with .splice
      nums.splice(pointer, 1);
    } else {
      pointer++;
    }
  }

  // return nums length
  return nums.length;
};