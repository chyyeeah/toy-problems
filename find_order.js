const find_order = function (tasks, prerequisites) {
  const sortedOrder = [],
    inDegrees = new Array(tasks).fill(0),
    graph = new Array(tasks).fill(0).map(() => new Array());

  prerequisites.forEach(([dependency, task]) => {
    inDegrees[task]++;
    graph[dependency].push(task);
  });

  const sources = [];
  inDegrees.forEach((count, idx) => {
    if (count < 1) sources.push(idx);
  });

  while (sources.length > 0) {
    const node = sources.shift();
    sortedOrder.push(node);
    graph[node].forEach((task) => {
      inDegrees[task]--;
      if (inDegrees[task] < 1) sources.push(task);
    });
  }

  if (sortedOrder.length !== tasks) return [];

  return sortedOrder;
};


console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${find_order(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
