/**O(n^2) 2 pointers
 * Highly inefficient
 * TAKE INTO ACCOUNT THE INPUT ONLY HAS 3 numbers
*/
// const dutch_flag_sort = function(arr) {
//   let p1 = p2 = 0;

//   while (p1 < arr.length) {
//     while (p2 < arr.length) {
//       if (arr[p1] > arr[p2]) {
//         const temp = arr[p2];
//         arr[p2] = arr[p1];
//         arr[p1] = temp;
//       }
//       p2++;
//     }
//     p1++;
//     p2 = p1;
//   }
// };

/**O(n) 2 pointer
 * Crux: if pointer > low,
 * the element at low will always be 1
 * because 2 will always be push to the very end
 * whereas 1 will just be skipped over
 */
const dutch_flag_sort = function(arr) {
  let low = pointer = 0,
    high = arr.length - 1;

  while (pointer <= high) {
    console.log('->>', arr, pointer, low, high);
    if (arr[pointer] === 0) {
      [arr[pointer], arr[low]] = [arr[low], arr[pointer]];
      pointer++;
      low++;
    } else if (arr[pointer] === 2) {
      [arr[pointer], arr[high]] = [arr[high], arr[pointer]];
      high--;
    } else {
      pointer++;
    }
  }
};

let array = [1, 0, 2, 1, 0];
// dutch_flag_sort(array)
// console.log(array);
array = [2, 1, 0, 1, 2, 0];
dutch_flag_sort(array)
console.log(array);