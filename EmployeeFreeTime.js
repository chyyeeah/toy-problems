class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
};

const find_employee_free_time = function (schedule) {
  const result = [],
    allIntervals = [];

  schedule.forEach((intervals) => {
    intervals.forEach((interval) => {
      allIntervals.push(interval);
    })
  });

  allIntervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < allIntervals.length; i++) {
    const prev = allIntervals[i - 1],
      current = allIntervals[i];

    if (prev.end < current.start) {
      result.push(new Interval(prev.end, current.start));
    }
  }

  return result;
};


input = [[new Interval(1, 3), new Interval(5, 6)], [
  new Interval(2, 3), new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);


input = [[new Interval(1, 3), new Interval(9, 12)], [
  new Interval(2, 4)], [new Interval(6, 8)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);

input = [[new Interval(1, 3)], [
  new Interval(2, 4)], [new Interval(3, 5), new Interval(7, 9)]];
intervals = find_employee_free_time(input)
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);
