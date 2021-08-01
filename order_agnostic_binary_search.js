const binary_search = function(arr, key) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === key) return mid;

    if (arr[end] > arr[start]) {
      if (key > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1
      }
    } else {
      if (key > arr[mid]) {
        end = mid - 1
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))
