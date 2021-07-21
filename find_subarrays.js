/**
 * I thought it was O(n^2) but it's actually O(n^3)
 */
const find_subarrays = function (arr, target) {
  result = [];
  let left = 0, product = 1;

  for (let right = 0; right < arr.length; right++) {
    const end = arr[right];
    product *= end;

    while (product >= target && left < right) {
      product /= arr[left];
      left++;
    }

    const collection = [];
    for (let i = right; i >= left; i--) {
      collection.unshift(arr[i]);
      result.push(collection.slice());
    }
  }
  return result;
};

console.log(find_subarrays([2, 2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));