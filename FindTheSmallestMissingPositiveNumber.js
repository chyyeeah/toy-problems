// const find_first_smallest_missing_positive = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] !== i) {
//       if (nums[i] < 0 || nums[i] >= nums.length) break;
//       const temp = nums[i];
//       nums[i] = nums[temp];
//       nums[temp] = temp;
//     }
//   }
//   console.log(nums)

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== i) return i;
//   }

//   return nums.length;
// };

const find_first_smallest_missing_positive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1) {
      if (nums[i] <= 0 || nums[i] >= nums.length) break;
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length;
};

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));