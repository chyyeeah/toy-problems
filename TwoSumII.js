/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    const num = numbers[i];
    let left = i + 1,
      right = numbers.length - 1;

    while (left <= right) {
      const mid = Math.floor((right + left) / 2),
        complement = target - num;
      if (numbers[mid] === complement) return [i + 1, mid + 1];
      if (numbers[mid] > complement) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};