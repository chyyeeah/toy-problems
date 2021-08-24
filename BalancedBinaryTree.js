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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isNotBalanced = false;
  const recurse = (node) => {
    if (!node) return 0;
    if (isNotBalanced) return;

    const left = recurse(node.left);
    const right = recurse(node.right);

    if (Math.abs(left - right) > 1) isNotBalanced = true;

    return Math.max(left, right) + 1;
  };

  recurse(root);
  return !isNotBalanced;
};