/** Maximum Length of Repeated Subarray
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
  const matrix = [];
  nums1.forEach(_ => matrix.push(new Array(nums2.length).fill(0)));

  let max = 0;
  for (let i = nums1.length - 1; i >= 0; i--) {
      for (let j = nums2.length - 1; j >= 0; j--) {
          if (nums1[i] === nums2[j]) {
              let diag;
              if (matrix[i + 1] === undefined || matrix[i + 1][j + 1] === undefined) {
                  diag = 0
              } else {
                  diag = matrix[i + 1][j + 1];
              }
              const count = 1 + diag;
              matrix[i][j] = count;
              max = Math.max(max, count);
          }
      }
  }

  return max;
};