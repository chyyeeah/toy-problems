const find_permutations = function(nums) {
  const result = [];

  const recursive = (pos) => {
    if (pos === nums.length) return result.push(nums.slice());

    for (let i = pos; i < nums.length; i++) {
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      recursive(pos + 1);
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
    }
  };
  recursive(0);
  return result;
};


console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});