/** Same Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  if (!p && q || p && !q) return false;
  if (!p && !q) return true;

  const t1Stack = [];
  const t2Stack = [];
  t1Stack.push(p);
  t2Stack.push(q);

  while (t1Stack.length > 0 && t2Stack.length > 0) {
      const t1Node = t1Stack.pop();
      const t2Node = t2Stack.pop();

      if (t1Node.val !== t2Node.val) return false;

      if (t1Node.left && !t2Node.left || !t1Node.left && t2Node.left) {
          return false;
      }

      if (t1Node.right && !t2Node.right || !t1Node.right && t2Node.right) {
          return false;
      }

      if (t1Node.left && t2Node.left) {
          t1Stack.push(t1Node.left);
          t2Stack.push(t2Node.left);
      }

      if (t1Node.right && t2Node.right) {
          t1Stack.push(t1Node.right);
          t2Stack.push(t2Node.right);
      }
  }

  if (t1Stack.length !== t2Stack.length) return false;

  return true;
};