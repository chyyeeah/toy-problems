class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


// const find_minimum_depth = function (root) {
//   const queue = [[root, 1]];

//   while (queue.length > 0) {
//     const numNodesInLevel = queue.length;
//     for (let i = 0; i < numNodesInLevel; i++) {
//       const [node, depth] = queue.shift();
//       if (!node.left && !node.right) return depth;
//       if (node.left) queue.push([node.left, depth + 1]);
//       if (node.right) queue.push([node.right, depth + 1]);
//     }
//   }
// };

const find_minimum_depth = function (root) {
  const queue = [root];
  let depth = 0

  while (queue.length > 0) {
    const numNodesInLevel = queue.length;
    depth++;
    for (let i = 0; i < numNodesInLevel; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
