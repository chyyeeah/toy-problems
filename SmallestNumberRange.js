const Heap = require('collections/heap');

const find_smallest_range = function (lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let max = -Infinity,
    minDiff = Infinity,
    result;

  lists.forEach(list => {
    const e = list.shift();
    max = Math.max(max, e);
    minHeap.push([e, list]);
  });

  while (minHeap.length > 0) {
    const [val, list] = minHeap.pop(),
      diff = max - val;

    if (diff < minDiff) {
      minDiff = diff;
      result = [val, max];
    }

    if (list.length < 1) break;

    const nextVal = list.shift();
    max = Math.max(max, nextVal);
    minHeap.push([nextVal, list]);
  }

  return result;
};


console.log(`Smallest range is: ${find_smallest_range([[1, 5, 8], [4, 12], [7, 8, 10]])}`);
console.log(`Smallest range is: ${find_smallest_range([[1, 9], [4, 12], [7, 10, 16]])}`);
