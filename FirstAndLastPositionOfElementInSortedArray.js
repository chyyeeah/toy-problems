const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const findEnd = (arr, target, pivot, searchleft = true) => {
  let left, right;
  if (searchleft) {
    left = 0;
    right = pivot;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (arr[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  } else {
    left = pivot;
    right = arr.length - 1;

    while (left < right) {
      console.log(left, right)
      const mid = Math.floor((right + left) / 2) + 1;
      if (arr[mid] <= target) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const pivot = binarySearch(nums, target);
  if (pivot < 0) return [-1, -1];

  return [
    findEnd(nums, target, pivot, true),
    findEnd(nums, target, pivot, false)
  ];
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
// console.log(searchRange([1, 2, 3, 4, 5, 6], 7));
// console.log(findEnd([1, 4, 4, 4, 4, 5, 6], 4, 2, true));
// console.log(findEnd([1, 2, 4, 4, 4, 6], 4, 2, false));
console.log(searchRange([1,2,4,4,4,6], 4));
console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 0));