/** Majority Element
 * @param {number[]} nums
 * @return {number}
 */
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

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));