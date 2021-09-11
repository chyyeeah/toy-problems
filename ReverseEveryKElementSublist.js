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

const reverse = (node) => {
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};


const reverse_every_k_elements = function (head, k) {
  const dummy = new Node(null);
  let dummyPointer = dummy;

  while (head) {
    const temp = head;
    let current = temp;
    let n = k;
    while (n > 1 && current !== null) {
      current = current.next;
      n--;
    }

    if (current) {
      head = current.next;
      current.next = null;
    } else {
      head = null;
    }

    dummyPointer.next = reverse(temp);
    dummyPointer = temp;
  }

  return dummy.next;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)