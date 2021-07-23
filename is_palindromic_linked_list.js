class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const is_palindromic_linked_list = function (head) {
  const stack = [];
  let slow = head, fast = head.next;

  while (fast !== null && fast.next !== null) {
    stack.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }

  // fast.next === null ->> even
  if (fast === null) slow = slow.next;
  while (slow !== null && stack.length > 0) {
    const prev = stack.pop();
    if (prev.value !== slow.value) return false;
    slow = slow.next;
  }

  if (slow !== null || stack.length > 0) return false;

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
