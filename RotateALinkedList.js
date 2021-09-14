class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const rotate = function (head, rotations) {
  // figure out the length
  // figure out where the rotation end up
  // figure out how many nodes from the beginning will be moved to the end
  let length = 0,
    tail = null,
    current = head;
  while (current) {
    tail = current;
    current = current.next;
    length++;
  }

  let n = length - (rotations % length),
    prev = null,
    newHead = head;

  while (n > 0) {
    prev = newHead;
    newHead = newHead.next;
    n--;
  }

  // detach left
  // track new head
  // attach left to the end of right
  prev.next = null;
  tail.next = head;

  return newHead;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`)
