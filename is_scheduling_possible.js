const is_scheduling_possible = function (tasks, prerequisites) {
  const inDegrees = new Array(tasks).fill(0),
    graph = new Array(tasks).fill(0).map(() => new Array());

  prerequisites.forEach(([task, prereq]) => {
    inDegrees[prereq]++;
    graph[task].push(prereq);
  });

  const sources = [];
  inDegrees.forEach((count, idx) => {
    if (count === 0) sources.push(idx);
  });
  const sortedOrder = [];
  while (sources.length > 0) {
    const node = sources.shift();
    sortedOrder.push(node);
    graph[node].forEach((task) => {
      inDegrees[task]--;
      if (inDegrees[task] === 0) sources.push(task);
    })
  }
  console.log(sortedOrder);
  if (sortedOrder.length !== tasks) return false;
  return true;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
