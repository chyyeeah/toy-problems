/**Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const generate = (pos) => {
    if (pos >= nums.length) {
      return result.push(nums.slice());
    }

    for (let i = pos; i < nums.length; i++) {
      const temp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = temp;
      generate(pos + 1);
      nums[pos] = nums[i];
      nums[i] = temp;
    }
  };
  generate(0);

  return result;
};

console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));