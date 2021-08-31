/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = lengthB = 0,
    currentA = headA,
    currentB = headB;

  while (currentA !== null) {
    lengthA++;
    currentA = currentA.next;
  }

  while (currentB !== null) {
    lengthB++;
    currentB = currentB.next;
  }

  let short, long,
    diff = Math.max(lengthA, lengthB) - Math.min(lengthA, lengthB);

  if (lengthA > lengthB) {
    long = headA;
    short = headB;
  } else {
    long = headB;
    short = headA;
  }

  while (diff > 0) {
    long = long.next;
    diff--;
  }

  while (short !== long && short && long) {
    short = short.next;
    long = long.next;
  }

  if (short === long) return short;
  return null;
};