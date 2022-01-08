function findClosestValueInBst(tree, target) {
  let closest = tree.value,
    node = tree;

  while (node) {
    const minDiff = Math.abs(closest - target),
      diff = Math.abs(node.value - target);
    if (diff < minDiff) closest = node.value;

    if (target < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.right = new BST(5);
root.left.left.left = new BST(1);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.right = new BST(22);
root.right.left.right = new BST(14);

// console.log(root);
console.log(findClosestValueInBst(root, 12));