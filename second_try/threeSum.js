/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);
  for (let left = 0; left < nums.length; left++) {
    if (nums[left] > 0) break;
    if (nums[left] !== nums[left - 1]) {
      let right = left + 1;
      const seen = new Set();
      while (right < nums.length) {
        const target = -1 * nums[left] - nums[right];
        if (seen.has(target)) {
          result.push([nums[left], nums[right], target]);
          while (nums[right] === nums[right + 1]) right++;
        }
        seen.add(nums[right]);
        right++;
      }
    }
  }

  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,0,0]));
console.log(threeSum([0,0,0,0]));