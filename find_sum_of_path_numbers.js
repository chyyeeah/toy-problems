class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function (root) {
  const stack = [];
  let sum = 0;
  stack.push([root, root.value.toString()]);

  while (stack.length > 0) {
    const [node, acc] = stack.pop();
    if (!node.left && !node.right) sum += parseInt(acc);

    if (node.left) {
      const newAcc = acc + node.left.value.toString();
      stack.push([node.left, newAcc]);
    }

    if (node.right) {
      const newAcc = acc + node.right.value.toString();
      stack.push([node.right, newAcc]);
    }
  }

  return sum;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
