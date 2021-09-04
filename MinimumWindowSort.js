const shortest_window_sort = function (arr) {
  let left = 0,
    right = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      left = i;
      break;
    }
    if (i === arr.length - 2) return 0;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      right = i;
      break;
    }
  }

  let min = Infinity,
    max = -Infinity;

  for (let i = left; i < right + 1; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  while (left > 0 && arr[left - 1] > min) {
    left--;
  }

  while (right < arr.length - 1 && arr[right + 1] < max) {
    right++;
  }

  return right - left + 1;
};

console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));
