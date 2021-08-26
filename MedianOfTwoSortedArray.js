/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length < 1) {
    const mid = Math.floor((nums2.length - 1) / 2);
    if (nums2.length % 2 === 0) {
      return (nums2[mid] + nums2[mid + 1]) / 2;
    } else {
      return nums2[mid];
    }
  }

  if (nums2.length < 1) {
    const mid = Math.floor((nums1.length - 1) / 2);
    if (nums1.length % 2 === 0) {
      return (nums1[mid] + nums1[mid + 1]) / 2;
    } else {
      return nums1[mid];
    }
  }
  let left1 = left2 = 0,
    right1 = nums1.length - 1,
    right2 = nums2.length - 1,
    result;

  while (true) {
    const mid1 = Math.ceil((right1 - left1) / 2),
      mid2 = Math.ceil((right2 - left2) / 2);

    let median1, median2;
    if ((right1 + 1 - left1) % 2 === 0) {
      median1 = (nums1[mid1] + nums1[mid1 - 1]) / 2;
    } else {
      median1 = nums1[mid1];
    }

    if ((right2 + 1 - left2) % 2 === 0) {
      median2 = (nums2[mid2] + nums2[mid2 - 1]) / 2;
    } else {
      median2 = nums2[mid2];
    }

    if (median1 === median2) return median1;

    if ((right1 - left1) <= 1 && (right2 - left2) <= 1) {
      let val1, val2;
      if (median1 > median2) {
        val1 = Math.min(nums1[left1], nums1[right1] || nums1[left1]);
        val2 = Math.max(nums2[left2], nums2[right2] || nums2[left2]);
      } else {
        val1 = Math.max(nums1[left1], nums1[right1] || nums1[left1]);
        val2 = Math.min(nums2[left2], nums2[right2] || nums2[left2]);
      }
      return (val1 + val2) / 2;
    }


    if ((right1 - left1) > 1) {
      if (median1 > median2) {
        right1 = mid1;
      } else {
        left1 = mid1;
      }
    }

    if ((right2 - left2) > 1) {
      if (median2 > median1) {
        right2 = mid2;
      } else {
        left2 = mid2;
      }
    }
  }
};

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([3,4], [1,2]));
console.log(findMedianSortedArrays([0,0], [0,0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([2], [1]));
console.log(findMedianSortedArrays([], [2,3]));
console.log(findMedianSortedArrays([3], [-2,-1]));
