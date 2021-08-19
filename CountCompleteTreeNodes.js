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
var countNodes = function (root) {
  // base cases
    // if node is null, return 0
    // if the tree from the current node is perfect, return the number of nodes

  // recursive case
    // if the tree from current node is not perfect, recurse into the left and right nodes

  if (root === null) return 0;
  let lHeight = 0, rHeight = 0,
    lNode = rNode = root;

  while (lNode) {
    lHeight++;
    lNode = lNode.left;
  }

  while (rNode) {
    rHeight++;
    rNode = rNode.right;
  }

  if (lHeight === rHeight) return (2 ** lHeight) - 1;

  return countNodes(root.left) + countNodes(root.right) + 1;
};