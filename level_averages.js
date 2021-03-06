class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_level_averages = function(root) {
  const result = [], queue = [root];

  while (queue.length > 0) {
    const numNodesInLevel = queue.length;
    let sum = 0;
    for (let i = 0; i < numNodesInLevel; i++) {
      const node = queue.shift();
      sum += node.value;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    const average = sum / numNodesInLevel;
    result.push(average);
  }

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
