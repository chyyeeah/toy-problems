/** Maximum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** Recursive
 * @param {TreeNode} root
 * @return {number}
 */
//  var maxDepth = function(root) {
//   if (!root) return 0;
//   let max = 0;
//   const findMaxDepth = (node, depth) => {
//       if (!node.left && !node.right) {
//           max = Math.max(max, depth + 1);
//           return;
//       }

//       if (node.left) {
//           findMaxDepth(node.left, depth + 1);
//       }

//       if (node.right) {
//           findMaxDepth(node.right, depth + 1);
//       }
//   };

//   findMaxDepth(root, 0);
//   return max;
// };

/** Iterative
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const stack = [];
  stack.push([1, root]);

  while (stack.length > 0) {
    const [depth, node] = stack.pop();
    max = Math.max(max, depth);
    if (node.left) stack.push([depth + 1, node.left]);
    if (node.right) stack.push([depth + 1, node.right]);
  }

  return max;
};