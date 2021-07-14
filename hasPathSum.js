/**Path Sum
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
/**Recursion */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let found = false;

  const search = (node, sum) => {
    sum += node.val;
    if (found) return;
    if (!node.left && !node.right) {
      console.log(node, sum);
      if (sum === targetSum) found = true;
      return;
    }

    if (node.left) search(node.left, sum);
    if (node.right) search(node.right, sum);
  };
  search(root, 0)
  return found;
};

/**DFS w/ Stack */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [[0, root]];

  while (stack.length > 0) {
    const [sum, node] = stack.pop();

    if (!node.left && !node.right) {
      if (sum + node.val === targetSum) return true;
    }
    if (node.left) stack.push([sum + node.val, node.left]);
    if (node.right) stack.push([sum + node.val, node.right]);
  }
  return false;
};
