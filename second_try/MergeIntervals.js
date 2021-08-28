/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i],
      prev = result[result.length - 1];

    if (prev[1] >= current[0]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));
intervals = [[1,4],[4,5]];
console.log(merge(intervals));