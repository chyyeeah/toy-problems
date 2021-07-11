/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Runtime: 76 ms, faster than 95.70% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 39.2 MB, less than 66.44% of JavaScript online submissions for Maximum Subarray.
*/
 var maxSubArray = function(nums) {
  // sum_sub
  // max
  var sum_sub = 0;
  var max;

  // - iterate over array
  for (var i = 0; i < nums.length; i++) {
    //   - if sum_sub < 0 && current element > sum_sub
    if (sum_sub < 0 && nums[i] > sum_sub) {
      //     - set sum_sub to current element
      sum_sub = nums[i];
      //   - else
    } else {
      //     - add current element to sum_sub
      sum_sub += nums[i];
    }

    //   - if sum_sub > max || !max
    if (sum_sub > max || max === undefined) {
      //     - max = sum_sub
      max = sum_sub;
    }
  }

  // return max
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) === 6);
console.log(maxSubArray([1]) === 1);
console.log(maxSubArray([5,4,-1,7,8]) === 23);
console.log(maxSubArray([-2,1-3,3]) === 3);
console.log(maxSubArray([-1,0,-2]) === 0);