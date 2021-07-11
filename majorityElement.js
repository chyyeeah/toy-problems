/** Majority Element
 * @param {number[]} nums
 * @return {number}
 */
/** time: O(n), space: O(n) */
var majorityElement = function (nums) {
  const hash = new Map();
  const mid = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!hash.has(num)) hash.set(num, 0);

    const newCount = hash.get(num) + 1;
    if (newCount > mid) return num;
    hash.set(num, newCount);
  }
};

/** time: O(n), space: O(1) */
var majorityElement = function (nums) {
  let majCount = 0,
    majIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num === nums[majIndex]) {
      majCount++;
    } else {
      majCount--;
    }

    if (majCount === 0) {
      majIndex = i;
    }
  }
  return nums[majIndex];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));