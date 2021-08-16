const Heap = require('collections/heap');

const find_Kth_smallest = function (lists, k) {
  const maxHeap = new Heap([], null, (a, b) => a- b);

  lists.forEach((list) => {
    list.forEach((n) => {
      maxHeap.push(n);
      if (maxHeap.length > k) {
        maxHeap.pop();
      }
    })
  });

  return maxHeap.peek();
};


console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)}`)
