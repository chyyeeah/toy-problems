const topological_sort = function (vertices, edges) {
  const sortedOrder = [];

  // count the number of incoming nodes
  // initialize the adjencency list graph
  const inDegree = new Array(vertices).fill(0);
  const graph = new Array(vertices).fill(0).map(() => new Array());

  // build the graph
  edges.forEach(([parent, child]) => {
    inDegree[child]++;
    graph[parent].push(child); // had it flipped
  });

  // determine the source(s)
  const sources = [];
  inDegree.forEach((count, idx) => {
    if (count < 1) sources.push(idx);
  });

  // traverse the graph
  while (sources.length > 0) {
    const node = sources.shift();
    sortedOrder.push(node);
    graph[node].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] < 1) {
        sources.push(child);
      }
    });
  }

  if (sortedOrder.length !== vertices) return [];

  return sortedOrder;
};

/**Approach Review
 * 1. build out an inDegree hash map
 *  - helps with determining initial source(s)
 *  - helps with keep track of new source as we traverse the graph
 * 2. build out the graph (adjencency graph)
 *  - used for graph traversal
 * 3. initialize a queue of sources
 *  - use the inDegree hash map to determine initial source(s)
 * 4. traverse the graph
 *  - after visiting a child node, update the inDegree hash map by decrementing the value.
 *    - add the child node to sources when they reach 0 inDegrees
 *    - this will help to determine if all the dependencies of a child node has been accounted for
 */


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
