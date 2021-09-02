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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  const preOrderDFS = (node) => {
    if (!node) return null;
    const newNode = new TreeNode(node.val);

    newNode.left = preOrderDFS(node.right);
    newNode.right = preOrderDFS(node.left);

    return newNode;
  };

  return preOrderDFS(root);
};