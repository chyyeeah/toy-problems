const insert_min_heap = (heap, node, k) => {
  heap.push(node);
  if (heap.length === 1) return;
  if (heap.length === 2 && heap[1][1] < heap[0][1]) {
    [heap[0], heap[1]] = [heap[1], heap[0]];
  }

  let nodePos = heap.length - 1;
  if (heap.length > k) {
    [heap[0], heap[nodePos]] = [heap[nodePos], heap[0]];
    heap.pop();
    nodePos = 0;
    let leftPos = (nodePos * 2) + 1,
      rightPos = (nodePos * 2) + 2;


    while (
      heap[leftPos] && heap[nodePos][1] > heap[leftPos][1]
      || heap[rightPos] && heap[nodePos][1] > heap[rightPos][1]
    ) {
      if (heap[rightPos]) {
        if (hello)[]
      }
        if (heap[leftPos][1] < heap[rightPos][1]) {
          [heap[leftPos], heap[nodePos]] = [heap[nodePos], heap[leftPos]];
          nodePos = leftPos;
        } else {
          [heap[rightPos], heap[nodePos]] = [heap[nodePos], heap[rightPos]];
          nodePos = rightPos;
        }
        leftPos = (nodePos * 2) + 1;
        rightPos = (nodePos * 2) + 2;
      } else {
        [heap[leftPos], heap[nodePos]] = [heap[nodePos], heap[leftPos]];
        nodePos = leftPos;
        leftPos = (nodePos * 2) + 1;
      }
    }
  } else {
    nodePos = heap.length - 1;
    let parentPos = Math.floor((nodePos - 1) / 2);
    while (heap[parentPos] && heap[nodePos][1] < heap[parentPos][1]) {
      [heap[parentPos], heap[nodePos]] = [heap[nodePos], heap[parentPos]];
      nodePos = parentPos;
      parentPos = Math.floor((nodePos - 1) / 2);
  }
};

const find_k_frequent_numbers = function (nums, k) {
  const topNumbers = [];

  // create a frequency hashmap
  const freq = {};
  nums.forEach(num => {
    if (!freq[num]) freq[num] = 0;
    freq[num]++;
  });

  const minHeap = [];
  // iterate over the hashmap
  // insert first k into minHeap
  // delete from hashmap after use
  let count = 0;
  for (let num in freq) {
    if (count > k) break;
    insert_min_heap(minHeap, [num, freq[num]], k);
    count++;
    delete freq[num];
  }

  // iterate over the rest of hashmap
  // insert if occurence is > root's occurence
  for (let num in freq) {
    if (minHeap[0][1] < freq[num]) insert_min_heap(minHeap, [num, freq[num]], k);
  }

  minHeap.forEach(([num, occurence]) => {
    topNumbers.push(num);
  });

  return topNumbers;
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
