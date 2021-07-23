class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_length = function(head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next,
    length = 0;

  while (fast !== null || fast.next !== null) {
    if (slow === fast) break;
    slow = slow.next;
    if (fast.next === null) return false;
    fast = fast.next.next;
  }

  length++;
  fast = fast.next;
  while (fast !== slow) {
    fast = fast.next;
    length++;
  }

  return length;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${find_cycle_length(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${find_cycle_length(head)}`)
