/** Linked List Cycle
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  if (!head.next) return false;
  let turtle = head;
  let rabbit = head.next;

  while (rabbit !== null) {
    if (turtle === rabbit) return true;
    if (rabbit.next === null) return false;
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }
  return false;
};