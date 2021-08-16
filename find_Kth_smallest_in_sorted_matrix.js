const Heap = require('collections/heap');

const find_Kth_smallest = function (matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  // add the first element of each row to the heap
  // [num, index, array]
  matrix.forEach((row) => {
    minHeap.push([row[0], 0, row]);
  });

  // remove node from top of the heap
  // if k nodes have been viewed, return the value
  // otherwise, push the next value in the array
  let numViewed = 0;
  while (minHeap.length > 0) {
    const [num, idx, arr] = minHeap.pop();
    numViewed++;
    if (numViewed === k) return num;
    if (idx + 1 < arr.length) {
      minHeap.push([arr[idx + 1], idx + 1, arr]);
    }
  }

  return null;
};

/**Lesson Learned
 * 21: we will eventually get to all values in the matrix
 * min heap is better than max heap because we can return the k-smallest value quicker
 */


console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 7, 10], [5, 8, 11]], 9)}`)
