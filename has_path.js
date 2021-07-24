class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const has_path = function (root, sum) {
  const stack = [];
  stack.push([root.value, root]);
  while (stack.length > 0) {
    const [ currentSum, node ] = stack.pop();
    if (currentSum === sum) return true;
    if (node.left) stack.push([node.left.value + currentSum, node.left]);
    if (node.right) stack.push([node.right.value + currentSum, node.right]);
  }
  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
