const find_subsets = function(nums) {
  const subsets = [[]];
  let countAdded = 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const n = subsets.length;
    if (nums[i] === nums[i - 1]) {
      for (let j = n - 1; j >= n - countAdded; j--) {
        subsets.push(subsets[j].concat([nums[i]]));
      }
    } else {
      for (let j = 0; j < n; j++) {
        subsets.push(subsets[j].concat([nums[i]]));
      }
    }
    countAdded = n;
  }

  return subsets;
};


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});
