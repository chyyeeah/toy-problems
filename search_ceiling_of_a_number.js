// const search_ceiling_of_a_number = function(arr, key) {
//   let left = 0, right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor(left + ((right - left) / 2));
//     if (arr[mid] === key) return mid;
//     if (left === right && arr[right] >= key) return right;
//     if (key > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

const search_ceiling_of_a_number = function(arr, key) {
  let left = 0, right = arr.length - 1;
  if (key > arr[right]) return -1;

  while (left <= right) {
    const mid = Math.floor(left + ((right - left) / 2));
    if (arr[mid] === key) return mid;
    // if (left === right && arr[right] >= key) return right;
    if (key > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(left, right);
  return left;
};


console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], -1));