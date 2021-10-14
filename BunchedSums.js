class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const result = [];
  const recurse = (node, sum) => {
    if (!node.left && !node.right) return result.push(sum);
    if (node.left) recurse(node.left, sum + node.left.value);
    if (node.right) recurse(node.right, sum + node.right.value);
  };
  recurse(root, root.value);
  return result;
}