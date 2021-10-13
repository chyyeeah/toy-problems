// function iterativeInOrderTraversal(tree, callback) {
//   const stack = [[tree, null]]; // [node, prevNode]
//   while (stack.length > 0) {
//     const [node, prevNode] = stack.pop();
//     if (!prevNode || node.parent === prevNode) {
//       if (node.left) {
//         stack.push([node.left, node]);
//       } else {
//         callback(node);
//         if (node.parent) stack.push([node.parent, node]);
//         if (node.right) stack.push([node.right, node])
//       }
//     } else {
//       callback(node);
//       if (node.parent) stack.push([node.parent, node]);
//       if (node.right) stack.push([node.right, node])
//     }
//   }
// }

function iterativeInOrderTraversal(tree, callback) {
  let current = tree;
  let prev = null;
  while (current !== null) {
    // console.log('->', current);
    let next;
    if (!prev || current.parent === prev) {
      if (current.left) {
        next = current.left;
      } else {
        callback(current);
        if (current.right) {
          next = current.right;
        } else {
          next = current.parent;
        }
      }
    } else if (prev === current.left) {
      callback(current);
      if (current.right) {
        next = current.right;
      } else {
        next = current.parent;
      }
    } else {
      next = current.parent;
    }
    prev = current;
    current = next;
  }
}

class TreeNode {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent === undefined ? null : parent;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2, root);
root.left.left = new TreeNode(4, root.left);
root.left.left.right = new TreeNode(9, root.left.left);
root.right = new TreeNode(3, root);
root.right.left = new TreeNode(6, root.right);
root.right.right = new TreeNode(7, root.right);

iterativeInOrderTraversal(root, (node) => console.log(node.value));