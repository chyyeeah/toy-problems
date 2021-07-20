const remove_duplicates = function (arr) {
  let pointer = 0, swapPoint = 0;

  while (pointer < arr.length) {
    if (arr[pointer - 1] !== arr[pointer]) {
      if (pointer !== swapPoint) {
        arr[swapPoint] = arr[pointer];
      }
      swapPoint++;
    }
    pointer++;
  }

  return swapPoint;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));