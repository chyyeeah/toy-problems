const reverseLL = (head) => {
  let prev = null,
    current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0);
  let checkpoint = dummy,
    current = head;

  while (current) {
    const start = current;
    let n = k;
    while (n > 1 && current) {
      current = current.next;
      n--;
    }

    if (n === 1 && current) {
      const next = current.next;
      current.next = null;
      current = next;
      checkpoint.next = reverseLL(start);
      checkpoint = start;
    } else {
      checkpoint.next = start;
    }
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};

let obj = new ListNode(1);
obj.next = new ListNode(2);
obj.next.next = new ListNode(3);
obj.next.next.next = new ListNode(4);
obj.next.next.next.next = new ListNode(5);
// let reversed = reverseLL(obj);
// console.log(reversed);
let head = reverseKGroup(obj, 2);
while (head) {
  console.log(head.val);
  head = head.next;
}
console.log('~~~~');
obj = new ListNode(1);
obj.next = new ListNode(2);
obj.next.next = new ListNode(3);
obj.next.next.next = new ListNode(4);
obj.next.next.next.next = new ListNode(5);
head = reverseKGroup(obj, 3);
while (head) {
  console.log(head.val);
  head = head.next;
}
console.log('~~~~');
obj = new ListNode(1);
obj.next = new ListNode(2);
obj.next.next = new ListNode(3);
obj.next.next.next = new ListNode(4);
obj.next.next.next.next = new ListNode(5);
head = reverseKGroup(obj, 1);
while (head) {
  console.log(head.val);
  head = head.next;
}
console.log('~~~~');
obj = new ListNode(1);
head = reverseKGroup(obj, 1);
while (head) {
  console.log(head.val);
  head = head.next;
}