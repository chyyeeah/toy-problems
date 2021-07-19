class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const traverse = function(root) {
  const result = [],
    stack = [root];

  while (stack.length > 0) {
    let numNodes = stack.length;
    while (numNodes > 0) {
      const node = stack.shift();
      result.unshift(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      numNodes--;
    }
  }
  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
