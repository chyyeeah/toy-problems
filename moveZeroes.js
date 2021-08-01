/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    }  else {
      right++;
    }
  }
  console.log('second', JSON.stringify(nums));
};

// var moveZeroes = function (nums) {
//   // find zero
//   let right = nums.length - 1;
//   while (nums[right] === 0) {
//     right--;
//   }
//   // "right" is the next spot for a zero
//   let left = 0;
//   while (left < right) {
//     console.log(left, right);
//     if (nums[left] === 0) {
//       console.log('hit')
//       let p1 = left, p2 = left + 1;
//       while (p2 < right) {
//         nums[p1] = nums[p2];
//         p1++;
//         p2++;
//       }
//       nums[right] = 0;
//       right--;
//     }
//     left++;
//   }
// };

let arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);
arr = [0];
moveZeroes([0])
console.log(arr);