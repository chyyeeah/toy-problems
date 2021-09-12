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

const reverse_alternate_k_elements = function (head, k) {
  const dummy = new Node(null);
  let current = dummy,
    canReverse = true;

  while (head) {
    if (canReverse) {
      let tempHead = tempCurrent = head,
        n = k;
      while (n > 1 && tempCurrent) {
        tempCurrent = tempCurrent.next;
        n--;
      }

      if (tempCurrent) {
        head = tempCurrent.next;
        tempCurrent.next = null;
      } else {
        head = tempCurrent;
      }

      const reversed = reverse(tempHead);
      current.next = reversed;
      current = tempHead;
      canReverse = false;
    } else {
      let n = k;
      current.next = head;
      while (n > 0 && current) {
        current = current.next;
        head = head.next;
        n--;
      }
      canReverse = true;
    }
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
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)
