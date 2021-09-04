class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const reverse_linked_list = (head) => {
  let prev = null,
    current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const is_palindromic_linked_list = function (head) {
  // calc lenght of palindrome
  let nodes = 0,
    current = head;

  while (current !== null) {
    nodes++;
    current = current.next;
  }

  current = head;
  let mid = Math.floor(nodes / 2);

  while (mid > 1) {
    mid--;
    current = current.next;
  }

  let right, middle;
  if (nodes % 2 === 0) {
    right = current.next;
  } else {
    mid = current.next;
    right = current.next.next
  }
  current.next = null;
  let left = reverse_linked_list(head);

  const leftHead = left,
    rightHead = right;

  while (left && right) {
    if (left.value !== right.value) return false;
    left = left.next;
    right = right.next;
  }

  const LinkedList = reverse_linked_list(leftHead);
  leftHead.next = mid ? mid : rightHead;

  return true;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
