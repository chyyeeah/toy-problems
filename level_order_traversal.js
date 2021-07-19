class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const traverse = function(root) {
  const result = [];
  if (!root) return result;
  const stack = [root];
  while (stack.length > 0) {
    let numNodes = stack.length;
    while (numNodes > 0) {
      const node = stack.shift();
      result.push(node.value);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      numNodes--;
    }
  }

  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
