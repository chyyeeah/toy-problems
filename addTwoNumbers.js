/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head, currentResult,
    carry = 0,
    current1 = l1, current2 = l2;

  while (current1 || current2 || carry) {
    let sum = carry;
    if (current1) {
      sum += current1.val;
      current1 = current1.next;
    }
    if (current2) {
      sum += current2.val;
      current2 = current2.next;
    }
    carry = 0;

    if (sum > 9) {
      sum %= 10;
      carry = 1;
    }

    const node = new ListNode(sum);
    if (!head) {
      head = currentResult = node;
    } else {
      currentResult.next = node;
      currentResult = node;
    }
  }
  currentResult.next = null;

  return head;
};