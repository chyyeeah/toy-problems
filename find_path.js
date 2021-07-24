class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_path = function (root, sequence) {
  const stack = [];
  stack.push([root, 0]);

  while (stack.length > 0) {
    const [node, pos] = stack.pop();
    if (node.value === sequence[pos]) {
      if (!node.left && !node.right && pos === (sequence.length - 1)) {
        return true;
      }
      if (node.left) stack.push([node.left, pos + 1]);
      if (node.right) stack.push([node.right, pos + 1]);
    }
  }

  return false;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
