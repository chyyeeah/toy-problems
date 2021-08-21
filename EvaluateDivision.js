/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // build out graph
  const graph = {};
  equations.forEach(([n1, n2], idx) => {
    if (!graph[n1]) graph[n1] = {};
    if (!graph[n2]) graph[n2] = {};
    graph[n1][n2] = values[idx];
    graph[n2][n1] = (1 / values[idx]);
  });

  const results = [];

  queries.forEach(([n1, n2], idx) => {
    if (!graph[n1] || !graph[n2]) {
      results.push(-1);
    } else {
      const visited = new Set(),
        stack = [];
      let res;
      stack.push([n1, 1]);
      while (stack.length > 0) {
        const [node, product] = stack.pop();
        if (node === n2) {
          results.push(product);
          break;
        }
        for (let key in graph[node]) {
          if (!visited.has(key)) {
            stack.push([key, graph[node][key] * product]);
            visited.add(node);
          }
        }
      }
      if (results[idx] === undefined) results.push(-1);
    }
  });

  return results;
};

let equations = [["a","b"],["b","c"]],
  values = [2.0,3.0],
  queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
console.log(calcEquation(equations, values, queries));
equations = [["a","b"],["b","c"],["bc","cd"]];
values = [1.5,2.5,5.0];
queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
console.log(calcEquation(equations, values, queries));
equations = [["a","b"]];
values = [0.5];
queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
console.log(calcEquation(equations, values, queries));
equations = [["a","b"],["c","d"]];
values = [1.0,1.0];
queries = [["a","c"],["b","d"],["b","a"],["d","c"]];
console.log(calcEquation(equations, values, queries));