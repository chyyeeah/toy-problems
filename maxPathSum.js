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
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  const recursive = (node) => {
    if (!node) return 0;

    const left = recursive(node.left);
    const right = recursive(node.right);

    maxSum = Math.max(
      maxSum,
      node.val,
      node.val + left,
      node.val + right,
      node.val + left + right
    );

    return Math.max(node.val + Math.max(left, right), 0);
  };

  recursive(root);

  return maxSum;
};

/**Learning moments
 * 21: The max path sum could be a number of different cases
 *  - A single node
 *  - The node and only the left side
 *  - The node and only the right side
 *  - The Node and both the left and right sides
 * 29: I will only inclue a part of the tree if it is >= 0
 */

/**Updated
 * Cleaner.
 * Pruning is now happening when I get the respective sums of
 *  the left and right branches.
*/
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  const recursive = (node) => {
    if (!node) return 0;

    const left = Math.max(recursive(node.left), 0);
    const right = Math.max(recursive(node.right), 0);

    maxSum = Math.max(maxSum, node.val + left + right);

    return node.val + Math.max(left, right);
  };

  recursive(root);

  return maxSum;
};