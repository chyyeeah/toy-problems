const max_heap_insert = (heap, value, k) => {
  heap.push(value)
  if (heap.length === 1) return;
  let nodePos = heap.length - 1;
  if (heap.length > k) {
    [heap[0], heap[nodePos]] = [heap[nodePos], heap[0]];
    heap.length = k;
    nodePos = 0;
    let leftChildPos = (nodePos * 2) + 1,
      rightChildPos = (nodePos * 2) + 2;
    while (heap[nodePos] < heap[leftChildPos] || heap[nodePos] < heap[rightChildPos]) {
      if (heap[leftChildPos] > heap[rightChildPos]) {
        [heap[leftChildPos], heap[nodePos]] = [heap[nodePos], heap[leftChildPos]];
      } else {
        [heap[rightChildPos], heap[nodePos]] = [heap[nodePos], heap[rightChildPos]];
      }
    }
  } else {
    let parentPos = Math.floor((nodePos - 1) / 2);
    while (heap[nodePos] > heap[parentPos]) {
      [heap[parentPos], heap[nodePos]] = [heap[nodePos], heap[parentPos]];
      nodePos = parentPos;
      parentPos = Math.floor((nodePos - 1) / 2);
    }
  }
};

const find_Kth_smallest_number = function (nums, k) {
  const maxHeap = [];

  for (let i = 0; i < k; i++) {
    max_heap_insert(maxHeap, nums[i], k);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap[0]) {
      max_heap_insert(maxHeap, nums[i], k);
    }
  }
  return maxHeap[0];
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
