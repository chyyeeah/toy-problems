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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const recurse = (node) => {
    if (!node.left && !node.right) return 1;

    let left = 0, right = 0;
    if (node.left) left = recurse(node.left);
    if (node.right) right = recurse(node.right);

    // check if the current diameter is the max
    max = Math.max(max, left + right);

    // return the length of the longest branch
    return Math.max(left, right) + 1;
  };

  recurse(root);
  return max;
};