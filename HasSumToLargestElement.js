const hasSumToLargestElement = (arr) => {
  let max = -Infinity, idx;
  arr.forEach((num, i) => {
    if (num > max) {
      max = num;
      idx = i;
    }
  });

  const recurse = (remaining, i) => {
    if (remaining === 0) return 0;
    if (remaining < 0) return -1;

    for (let j = i; j < arr.length; j++) {
      if (j === idx) continue;
      const result = recurse(remaining - arr[j], j + 1);
      if (result === 0) return 0;
    }

    return -1;
  };

  return recurse(max, 0) === 0 ? true : false;
};

console.log(hasSumToLargestElement([1,3,5,13,10]));
console.log(hasSumToLargestElement([1,3,5,10]));