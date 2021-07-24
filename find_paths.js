class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_paths = function (root, sum) {
  const allPaths = [], stack = [];
  stack.push([root, root.value, [root.value]]);

  while (stack.length > 0) {
    const [node, currentTotal, currentPath] = stack.pop();
    if (currentTotal === sum) {
      allPaths.push(currentPath.slice());
    }

    if (node.left) {
      const leftValue = node.left.value;
      stack.push([
        node.left, currentTotal + leftValue, currentPath.concat([leftValue])
      ]);
    }

    if (node.right) {
      const rightValue = node.right.value;
      stack.push([
        node.right, currentTotal + rightValue, currentPath.concat([rightValue])
      ]);
    }
  }
  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
