/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = result[result.length - 1];
    const currentInterval = intervals[i];
    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }
  return result;
};