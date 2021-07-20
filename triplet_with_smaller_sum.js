const triplet_with_smaller_sum = function(arr, target) {
  arr.sort((a, b) => a - b);
  count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += (right - left);
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

console.log(triplet_with_smaller_sum([-1, -1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));