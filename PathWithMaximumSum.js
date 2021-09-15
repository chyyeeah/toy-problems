class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



const find_maximum_path_sum = function (root) {
  let max = -Infinity;
  const recurse = (node) => {
    if (!node) return 0;
    let left = recurse(node.left);
    let right = recurse(node.right);
    if (left < 0) left = 0;
    if (right < 0) right = 0;
    max = Math.max(max, left + right + node.value);
    return Math.max(left, right) + node.value;
  };
  recurse(root);
  return max;
};



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
root.right = new TreeNode(-6)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
