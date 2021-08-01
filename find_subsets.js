const find_subsets = function(nums) {
  const subsets = [[]];
  nums.forEach(num => {
    const subsetsLength = subsets.length;
    for (let i = 0; i < subsetsLength; i++) {
      subsets.push(subsets[i].concat([num]));
    }
  });
  return subsets;
};


// console.log(`Here is the list of subsets: ${JSON.stringify(find_subsets([1, 3]))}`)
// console.log(`Here is the list of subsets: ${JSON.stringify(find_subsets([1, 5, 3]))}`)
console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});