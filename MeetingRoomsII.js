const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const hasOverlap = (inv1, inv2) => {
  if (inv1[1] > inv2[0]) return true;
  return false;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 1) return 1;
  intervals.sort((a, b) => a[0] - b[0]);

  let max = 1;
  const minHeap = new MinPriorityQueue({
    priority: (interval) => interval[1],
    compare: (a, b) => a[1] - b[1]
  });

  minHeap.enqueue(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    while (!minHeap.isEmpty() && !hasOverlap(minHeap.front(), current)) {
      minHeap.dequeue();
    }
    /**Leetcode implementation
     * minHeap.front() returns an object so I had to access the element property
     */
    // while (!minHeap.isEmpty() && !hasOverlap(minHeap.front().element, current)) {
    //   minHeap.dequeue();
    // }
    minHeap.enqueue(current);
    max = Math.max(max, minHeap.size());
  }

  return max;
};

// const obj = new MinPriorityQueue({
//   compare: (a, b) => a - b
// });
// obj.enqueue(10);
// obj.enqueue(3);
// obj.enqueue(30);
// obj.enqueue(20);
// obj.dequeue();
// console.log(obj);
let intervals = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals));
intervals = [[7, 10], [2, 4]];
console.log(minMeetingRooms(intervals));
intervals = [[0, 30], [5, 10], [15, 20], [6, 9]];
console.log(minMeetingRooms(intervals));
intervals = [[5, 8], [6, 8]];
console.log(minMeetingRooms(intervals));