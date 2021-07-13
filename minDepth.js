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
/** DFS */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let minDepth = Infinity;
  const stack = [];
  stack.push([root, 1]);

  while (stack.length > 0) {
    const [node, depth] = stack.pop();

    if (!node.left && !node.right) minDepth = Math.min(minDepth, depth);

    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return minDepth;
};

/** BFS */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let minDepth = Infinity;
  const queue = [];
  queue.push([root, 1]);

  while (queue.length > 0) {
    const [node, depth] = queue.shift();

    if (!node.left && !node.right) return depth;

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};