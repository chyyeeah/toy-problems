// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  if (!head.next) return new Node(head.val, null, null);
  let current = head.next,
    prevCopy = new Node(head.val),
    currentCopy;

  const hashMap = {},
    copyHead = prevCopy;
  hashMap[prevCopy.val] = prevCopy;

  while (current !== null) {
    currentCopy = new Node(current.val, prevCopy);
    hashMap[current.val] = currentCopy
    prevCopy.next = currentCopy;
    prevCopy = currentCopy;
    current = current.next
  }
  prevCopy.next = null;
  current = head;
  while (current !== null) {
    if (current.random) {
      hashMap[current.val].random = hashMap[current.random.val];
    } else {
      hashMap[current.val].random = null;
    }
    current = current.next;
  }

  return copyHead;
};