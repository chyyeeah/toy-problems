/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const recurse = (arr, left, right) => {
    if (left > right) return null;
    const mid = Math.floor((right + left) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = recurse(arr, left, mid - 1);
    node.right = recurse(arr, mid + 1, right);

    return node;
  };
  return recurse(nums, 0, nums.length - 1);
};