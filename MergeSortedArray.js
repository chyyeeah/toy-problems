/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
Runtime: 72 ms, faster than 95.14% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 37.9 MB, less than 98.79% of JavaScript online submissions for Merge Sorted Array.
*/
var insert = function(array, value, position) {
  var prev = array[position];
  for (var i = position + 1; i < array.length; i ++) {
    var tempPrev = array[i];
    array[i] = prev;
    prev = tempPrev;
  }
  array[position] = value;
};

var merge = function(nums1, m, nums2, n) {
  if (m < 1) {
    for (var j = 0; j < nums2.length; j++) {
      nums1[j] = nums2[j];
    }
    return nums1;
  }
  if (n < 1) return nums1;

  var pointer = 0;
  for (var i = 0; i < nums1.length; i++) {
    if (nums2[pointer] < nums1[i]) {
      insert(nums1, nums2[pointer], i);
      pointer++;
    }
    while (nums1[i] === nums2[pointer]) {
      insert(nums1, nums2[pointer], i);
      i++;
      pointer++;
    }
  }

  if (pointer < n) {
    for (var j = pointer; j < nums2.length; j++) {
      nums1[m + j] = nums2[j];
    }
  }

  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([2,0], 1, [1], 1));
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));
console.log(merge([0,0,0,0,0], 0, [1,2,3,4,5], 5));