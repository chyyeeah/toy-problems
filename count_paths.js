class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const count_paths = function(root, S) {
  const stack = [];
  stack.push([root, root.value, [root.value]]);
  let count = 0;

  while (stack.length > 0) {
    const [node, total, path] = stack.pop();
    let totalSoFar = total, pointer = 0;
    while (pointer < path.length && totalSoFar >= S) {
      if (totalSoFar === S) count++;
      totalSoFar -= path[pointer];
      pointer++;
    }
    if (node.left) stack.push([
      node.left, total + node.left.value, [...path, node.left.value]
    ])
    if (node.right) stack.push([
      node.right, total + node.right.value, [...path, node.right.value]
    ])
  }

  return count;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`);

var root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(3)
console.log(`Tree has paths: ${count_paths(root, 12)}`)
