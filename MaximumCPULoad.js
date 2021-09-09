class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
};

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);
  const minHeap = [jobs[0]];
  let max = currentLoad = jobs[0].cpu_load;

  for (let i = 1; i < jobs.length; i++) {
    const current = jobs[i];
    let last = minHeap[minHeap.length - 1];
    while (minHeap.length > 0 && current.start >= last.end) {
      const job = minHeap.pop();
      currentLoad -= job.cpu_load;
      last = minHeap[minHeap.length - 1];
    }
    minHeap.push(current);
    minHeap.sort((a, b) => b.end - a.end);
    currentLoad += current.cpu_load;
    max = Math.max(max, currentLoad);
  }

  return max;
};


console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
