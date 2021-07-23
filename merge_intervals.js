class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  merged = []
  intervals.sort((a, b) => a.start - b.start);
  merged.push(new Interval(intervals[0].start, intervals[0].end));

  for (let i = 1; i < intervals.length; i++) {
    const latestMerged = merged[merged.length - 1],
      interval = intervals[i];

    if (latestMerged.end >= interval.start) {
      latestMerged.end = Math.max(latestMerged.end, interval.end);
    } else {
      merged.push(new Interval(interval.start, interval.end));
    }
  }

  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
