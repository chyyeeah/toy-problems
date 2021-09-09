class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

const min_meeting_rooms = function (meetings) {
  meetings.sort((a, b) => a.start - b.start);
  const minHeap = [meetings[0]];
  let max = 1;

  for (let i = 1; i < meetings.length; i++) {
    const current = meetings[i];
    let last = minHeap[minHeap.length - 1];

    if (current.start < last.end) {
      minHeap.push(current);
    } else {
      while (minHeap.length > 0 && current.start >= last.end) {
        minHeap.pop();
        last = minHeap[minHeap.length - 1];
      }
      minHeap.push(current);
    }
    minHeap.sort((a, b) => b.end - a.end);
    max = Math.max(max, minHeap.length);
  }

  return max;
};

console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
