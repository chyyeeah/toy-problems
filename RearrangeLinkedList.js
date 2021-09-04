class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const reverse = (head) => {
  let prev = null;
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};


const reorder = function(head) {
  let num = 0,
    current = head;

  while (current !== null) {
    num++;
    current = current.next;
  }

  let mid = Math.floor(num / 2);

  current = head;
  while (mid > 0) {
    current = current.next;
    mid--;
  }

  let left = head,
    right = reverse(current);

  while (left && right) {
    let temp = left.next;
    left.next = right;
    left = temp;

    temp = right.next;
    right.next = left;
    right = temp;
  }

  if (left) left.next = null;
}

/*Learning moment
- when we split the linked list into 2, the end of the left half STILL points to a node.
- this node is the end of the newly reversed right half
*/


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
reorder(head)
head.print_list()