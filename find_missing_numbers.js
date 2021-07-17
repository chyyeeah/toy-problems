const find_missing_numbers = function (nums) {
  missingNumbers = [];
  // TODO: Write your code here
  // cyclically sort the array
  // if number doesn't exist at the position, swap
  let pointer = 0;
  while (pointer < nums.length) {
    while (nums[pointer] - 1 !== pointer && pointer < nums.length) {
      const num = nums[pointer];
      if (num === nums[num - 1] || num - 1 > nums.length) {
        pointer++;
      } else {
        nums[pointer] = nums[num - 1];
        nums[num - 1] = num;
      }
    }
    pointer++;
  }
  // console.log(nums);
  // iterate over the array
  // if number doesn't match the current index - 1,
  // push to missingNumbers
  nums.forEach((num, idx) => {
    if (num - 1 !== idx) missingNumbers.push(idx + 1);
  })
  return missingNumbers;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));