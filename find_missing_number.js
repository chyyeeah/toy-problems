const find_missing_number = function (nums) {
  // TODO: Write your code here
  let idxMissing = 0;
  let pointer = 0;

  while (pointer < nums.length) {
    while (nums[pointer] !== pointer && pointer < nums.length) {

      if (nums[pointer] >= nums.length) {
        idxMissing = pointer;
        pointer++;
      } else {
        const temp = nums[pointer];
        nums[pointer] = nums[nums[pointer]];
        nums[temp] = temp;
      }
    }
    pointer++;
  }
  return idxMissing;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));