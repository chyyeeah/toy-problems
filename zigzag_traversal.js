class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const traverse = function (root) {
  const result = [];
  let stack = [];
  stack.push(['r', root]);

  while (stack.length > 0) {
    const levelStore = [],
      nodesInLevel = stack.length,
      nextLevel = [];
    for (let i = 0; i < nodesInLevel; i++) {
      const [childrenDirection, node] = stack.shift();
      levelStore.push(node.value);
      if (childrenDirection === 'l') {
        if (node.right) nextLevel.unshift(['r', node.right]);
        if (node.left) nextLevel.unshift(['r', node.left]);
      } else {
        if (node.right) nextLevel.push(['l', node.right]);
        if (node.left) nextLevel.push(['l', node.left]);
      }
    }
    stack = stack.concat(nextLevel);
    result.push(levelStore.slice());
  }
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)
