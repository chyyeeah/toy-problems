// /** time: O(n), space: O(1) 2 pointer */
const pair_with_targetsum = function(arr, target_sum) {
  if (arr.length < 1) return [-1, -1];

  let p1 = 0,
    p2 = arr.length - 1;

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];

    if (sum === target_sum) return [p1, p2];
    if (sum < target_sum) p1++;
    if (sum > target_sum) p2--;
  }

  return [-1, -1];
};

/** time: O(n), space: O(n) hash table */
// const pair_with_targetsum = function(arr, target_sum) {
//   if (arr.length < 2) return [-1, -1];
//   const store = {};
//   store[target_sum - arr[0]] = 0;

//   for (let i = 1; i < arr.length; i++) {
//     const num = arr[i];
//     if (store[num] !== undefined) return [store[num], i];
//     store[target_sum - num] = i;
//   }

//   return [-1, -1];
// };

console.log(pair_with_targetsum([2,5,9,11], 11));
console.log(pair_with_targetsum([1,2,3,4,6], 6));