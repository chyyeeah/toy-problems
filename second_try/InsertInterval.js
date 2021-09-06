class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals, new_interval) {
  if (intervals.length < 1) return [...new_interval];
  if (intervals[intervals.length - 1].end < new_interval.start) {
    return intervals.concat(new_interval);
  }
  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.end < new_interval.start) {
      merged.push(interval);
    } else {
      if (interval.start > new_interval.end) {
        merged.push(new_interval);
        merged.push(interval);
      } else {
        while (i < intervals.length && intervals[i].start < new_interval.end) {
          new_interval.start = Math.min(intervals[i].start, new_interval.start);
          new_interval.end = Math.max(intervals[i].end, new_interval.end);
          i++;
        }

        merged.push(new_interval);

        while (i < intervals.length) {
          merged.push(intervals[i]);
          i++;
        }
      }
    }
  }

  return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();