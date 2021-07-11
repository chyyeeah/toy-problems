/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  const result = [];
  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
      const anchor = nums[i];
      if (anchor > 0) break;

      let left = i + 1,
          right = nums.length - 1;

      if (i === 0 || nums[i - 1] !== anchor) {
          while (left < right) {
              const sum = anchor + nums[left] + nums[right]
              if (sum > 0) {
                  right--;
              } else if (sum < 0) {
                  left++;
              } else {
                  result.push([anchor, nums[left], nums[right]]);
                  left++;
                  right--;
                  while (left < right && nums[left] === nums[left - 1]) {
                      left++;
                  }
              }
          }
      }
  }
  return result;
};