const heap_insert = (heap, value, k) => {
  heap.push(value);
  if (heap.length < 2) return;

  let nodePos = heap.length - 1;
  if (heap.length > k) {
    [heap[0], heap[nodePos]] = [heap[nodePos], heap[0]];
    heap.length = k;
    nodePos = 0;
    let leftChildPos = 1,
      rightChildPos = 2;
    while (heap[nodePos] > heap[leftChildPos] || heap[nodePos] > heap[rightChildPos]) {
      if (heap[leftChildPos] < heap[rightChildPos]) {
        [heap[nodePos], heap[leftChildPos]] = [heap[leftChildPos], heap[nodePos]];
        nodePos = leftChildPos;
      } else {
        [heap[nodePos], heap[rightChildPos]] = [heap[rightChildPos], heap[nodePos]];
        nodePos = rightChildPos;
      }
      leftChildPos = (nodePos * 2) + 1;
      rightChildPos = (nodePos * 2) + 2;
    }
  } else {
    if (heap[nodePos] < heap[0]) {
      [heap[0], heap[nodePos]] = [heap[nodePos], heap[0]];
    }
  }
};

const find_k_largest_numbers = function (nums, k) {
  const result = []
  nums.forEach(num => {
    heap_insert(result, num, k);
  })
  return result;
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
// let arr = [1,5,10];
// heap_insert(arr, 7);
// console.log(arr);
// arr = [7]
// heap_insert(arr, 1);
// console.log(arr);
// arr = []
// heap_insert(arr, 7);
// console.log(arr);