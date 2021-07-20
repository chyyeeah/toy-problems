const triplet_sum_close_to_target = function(arr, target_sum) {
  arr.sort((a, b) => a - b);
  let closestDiff = Number.POSITIVE_INFINITY,
    closestSum;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(target_sum - sum)
      if (diff < closestDiff) {
        closestDiff = diff;
        closestSum = sum;
      }

      if (sum < target_sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));