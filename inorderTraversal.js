/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**Recursion */
var inorderTraversal = function (root) {
  const result = [];
  if (!root) return result;
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return result;
};
/**Iteratively */
var inorderTraversal = function (root) {
  const result = [],
    stack = [];
  if (!root) return result;
  let node = root;
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
};