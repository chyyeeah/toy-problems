function mergeRanges(meetings) {
  // Merge meetings ranges
  meetings.sort((a, b) => a.startTime - b.startTime);

  const result = [meetings[0]];

  for (let i = 0; i < meetings.length; i++) {
    const current = meetings[i];
    const latest = result[result.length - 1];

    if (current.startTime <= latest.endTime) {
      if (current.endTime > latest.endTime) {
        latest.endTime = current.endTime;
      }
    } else {
      result.push(current);
    }
  }

  return result;
};

let desc = 'meetings overlap';
let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
let expected = [{ startTime: 1, endTime: 4 }];
console.log(actual);

desc = 'sample input';
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];
console.log(actual);