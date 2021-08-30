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
var isSymmetric = function (root) {
  let isMatch = true;
  const compare = (left, right) => {
    if (!isMatch || !left && !right) return;
    if (!left && right || !right && left || left.val !== right.val) {
      return isMatch = false;
    }

    if (left.left || right.right) compare(left.left, right.right);
    if (left.right || right.left) compare(left.right, right.left);
  };

  compare(root.left, root.right);
  return isMatch;
};