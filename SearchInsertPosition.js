/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Runtime: 76 ms, faster than 79.00% of JavaScript online submissions for Search Insert Position.
Memory Usage: 38.9 MB, less than 24.99% of JavaScript online submissions for Search Insert Position.
*/

//  var searchInsert = function(nums, target) {
//   // iterate over nums array
//   for (var i = 0; i < nums.length; i++) {
//     // if element equals target
//       // return index
//     // if element is greater than target
//       // return index
//     if (nums[i] >= target) return i;
//   }

//   // return the last position in array
//   return nums.length;
// };

/*
Runtime: 76 ms, faster than 79.00% of JavaScript online submissions for Search Insert Position.
Memory Usage: 38.5 MB, less than 93.85% of JavaScript online submissions for Search Insert Position.
*/
var searchInsert = function(nums, target) {
  var start = 0;
  var end = nums.length;

  while (end > start) {
    var mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
};