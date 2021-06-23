class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {
  if (graph.length < 1) throw new Error('error!');

  // Create a valid coloring for the graph

  graph.forEach(node => {
    const used = new Set();
    const uncolored = [];

    if (node.color) {
      used.add(node.color);
    } else {
      uncolored.push(node);
    }

    node.neighbors.forEach(neighbor => {
      if (neighbor.color) {
        used.add(neighbor.color);
      } else {
        uncolored.push(neighbor);
      }
    });

    let pointer = 0;
    uncolored.forEach(node => {
      while (used.has(colors[pointer]) || pointer >= colors.length) pointer++;
      node.color = colors[pointer];
    });
  });
}