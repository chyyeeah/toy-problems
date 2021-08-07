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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];
  const stack = [[root, root.val, [root.val]]],
    results = [];
  while (stack.length > 0) {
    const [node, sum, path] = stack.pop();

    if (!node.left && !node.right && sum === targetSum) {
      results.push(path);
    }

    if (node.left) {
      const leftVal = node.left.val;
      stack.push([node.left, sum + leftVal, path.concat([leftVal])]);
    }

    if (node.right) {
      const rightVal = node.right.val;
      stack.push([node.right, sum + rightVal, path.concat([rightVal])]);
    }
  }

  return results;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

const obj = new TreeNode(5);
obj.left = new TreeNode(4);
obj.right = new TreeNode(8);
obj.left.left = new TreeNode(11);
obj.right.left = new TreeNode(13);
obj.right.right = new TreeNode(4);
obj.left.left.left = new TreeNode(7);
obj.left.left.right = new TreeNode(2);
obj.right.right.left = new TreeNode(5);
obj.right.right.right = new TreeNode(1);
// console.log(obj);

console.log(pathSum(obj, 22));