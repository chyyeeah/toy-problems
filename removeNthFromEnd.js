/** Remove Nth Node From End of List
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  let p1 = head, // before the node to delete
      p2 = head;

  // progress pointer2 to be the yardstick
  while (n > 0) {
      p2 = p2.next;
      n--;
  }

  if (p2) {
      // progress p1 and p2 until p2 hits the last node
      while (p2.next !== null) {
          p1 = p1.next;
          p2 = p2.next;
      }

      // remove the node to delete
      p1.next = p1.next.next;
  } else {
      head = head.next;
  }

  return head;
};