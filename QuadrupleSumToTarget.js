const search_quadruplets = function (arr, target) {
  const quadruplets = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[j] === arr[j - 1]) continue;
      let left = j + 1,
        right = arr.length - 1;
      const first = arr[i],
        second = arr[j];

      while (left < right) {
        const sum = first + second + arr[left] + arr[right];
        if (sum === target) {
          quadruplets.push([first, second, arr[left], arr[right]]);
          left++;
          while (left < right && arr[left] === arr[left - 1]) {
            left++;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return quadruplets;
};

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));