class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_length = (nodeInsideCycle) => {
  if (nodeInsideCycle === nodeInsideCycle.next) return 0;
  const start = nodeInsideCycle;
  let node = nodeInsideCycle, length = 1;

  node = node.next;
  while (node !== start) {
    node = node.next;
    length++;
  }

  return length;
};

const find_cycle_start = function(head) {
  let slow = head, fast = head.next;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let length = find_length(slow);
  slow = fast = head;

  while (length > 0) {
    fast = fast.next;
    length--;
  }
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
