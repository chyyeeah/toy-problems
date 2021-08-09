/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  if (lower === upper && nums.indexOf(lower) < 0) return [lower.toString()];
  if (nums.length < 1) return [`${lower.toString()}->${upper.toString()}`];

  const result = [];
  let start = 0, end = nums.length - 1;

  while (lower > nums[start]) {
    start++;
  }

  while (upper < nums[end]) {
    end--;
  }

  if (lower !== nums[start]) {
    if (lower === nums[0] - 1) {
      result.push(lower.toString());
    } else {
      result.push(`${lower}->${nums[0] - 1}`);
    }
  }

  while (start < end) {
    if (nums[start] + 1 !== nums[start + 1]) {
      let l = nums[start] + 1,
        u = nums[start + 1] - 1;

      if (l === u) {
        result.push(l.toString());
      } else {
        result.push(`${l}->${u}`);
      }
    }
    start++;
  }

  if (upper !== nums[end]) {
    if (upper === nums[end] + 1) {
      result.push(upper.toString());
    } else {
      result.push(`${nums[end] + 1}->${upper}`);
    }
  }

  return result;
};

console.log(findMissingRanges([0,1,3,50,75], 0, 99));
console.log(findMissingRanges([], 1, 1));
console.log(findMissingRanges([], -3, -1));
console.log(findMissingRanges([-1], -1, -1));
console.log(findMissingRanges([-1], -2, -1));