const search_triplets = function(arr) {
  arr.sort((a, b) => a - b);
  triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] !== arr[i - 1]) {
      let left = i + 1,
        right = arr.length - 1;

      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          triplets.push([arr[i], arr[left], arr[right]]);
          left++;
          right--;
          while (left < right && arr[left] === arr[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  return triplets;
};

console.log(search_triplets([-3, -3, 0, 1, 1, 2, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));