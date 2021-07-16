/**
 * @param {number[]} nums
 * @return {number}
 */
/**time: O(n^3) */
// var triangleNumber = function (nums) {
//   if (nums.length < 3) return 0;
//   let result = 0;
//   for (let p1 = 0; p1 < nums.length - 2; p1++) {
//     for (let p2 = p1 + 1; p2 < nums.length - 1; p2++) {
//       for (let p3 = p2 + 1; p3 < nums.length; p3++) {
//         if (nums[p1] === 0) continue;
//         if (nums[p2] === 0) continue;
//         if (nums[p3] === 0) continue;
//         if (
//           (nums[p1] + nums[p2] > nums[p3])
//           && (nums[p2] + nums[p3] > nums[p1])
//           && (nums[p1] + nums[p3] > nums[p2])
//         ) {
//           result++;
//         }
//       }
//     }
//   }
//   return result;
// };

/**Linear Scan */
var triangleNumber = function (nums) {
  if (nums.length < 3) return 0;

  nums.sort((a, b) => a - b);
  let count = 0;
  for (let p1 = 0; p1 < nums.length - 2; p1++) {
    let p3 = p1 + 2;
    for (let p2 = p1 + 1; p2 < nums.length - 1 && nums[p1] !== 0; p2++) {
      while (p3 < nums.length && nums[p1] + nums[p2] > nums[p3]) {
        p3++;
      }
      count += p3 - p2 - 1;
    }
  }
  return count;
};

// console.log(triangleNumber([0,1,0]));
// console.log(triangleNumber([2,2,3,4]));
// console.log(triangleNumber([4,2,3,4]));
console.log(triangleNumber([24,3,82,22,35,84,19]));