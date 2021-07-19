class Node {
  constructor(value, next=null){
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

const reverse_sub_list = function(head, p, q) {
  let previous = null,
    current = head;

  // get to the start of the sub_list
  while (p > 1) {
    p--;
    q--;
    previous= current;
    current = current.next;
  }
  const leftBreak = previous;
  const end = current;
  previous = current;
  current = current.next;
  // begin reversal from start of sub_list
  while (q > 1) {
    q--;
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  end.next = current
  leftBreak.next = previous;

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
