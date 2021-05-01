/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
Runtime: 88 ms, faster than 79.76% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 40.5 MB, less than 53.09% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/
var deleteDuplicates = function(head) {
  var placeholderNode = new ListNode('head');
  var currentNode = placeholderNode;
  var prevValue;

  while (head) {
    if (head.val !== prevValue) {
      currentNode.next = head;
      currentNode = currentNode.next;
      prevValue = head.val;
    }
    head = head.next;
  }
  currentNode.next = null;

  return placeholderNode.next;
};