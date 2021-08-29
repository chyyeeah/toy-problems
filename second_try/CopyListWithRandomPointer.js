/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const hash = new Map();
  let current = head;

  while (current !== null) {
    hash.set(current, new Node(current.val));
    current = current.next;
  }

  let newHead, copyCurrent;
  current = head;
  while (current !== null) {
    if (!newHead) {
      console.log(hash.get(current));
      newHead = copyCurrent = hash.get(current);
    }

    copyCurrent.next = current.next ? hash.get(current.next) : null;
    copyCurrent.random = current.random ? hash.get(current.random) : null;

    copyCurrent = copyCurrent.next;
    current = current.next;
  }

  return newHead;
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

const obj = new Node(7);
obj.next = new Node(13);
obj.next.next = new Node(11);
obj.next.next.next = new Node(10);
obj.next.next.next.next = new Node(1, null);
obj.random = null;
obj.next.random = obj;
obj.next.next.random = obj.next.next.next.next;
obj.next.next.next.random = obj.next.next;
obj.next.next.next.next.random = obj;
const copy = copyRandomList(obj);

let head = obj,
  copyHead = copy;
while (head !== null) {
  console.log(head === copyHead, head.val, copyHead.val, head.next?.val, head.next?.val, head.random?.val, head.random?.val);
  head = head.next;
  copyHead = copyHead.next;
}