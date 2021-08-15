const Heap = require('collections/heap');

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


const merge_lists = function (lists) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);
  let resultHead = null;

  lists.forEach((head) => {
    while (head !== null) {
      minHeap.push(head);
      head = head.next;
    }
  });

  resultHead = minHeap.pop();
  current = resultHead;

  while (minHeap.length > 0) {
    const node = minHeap.pop();
    current.next = node;
    current = current.next;
  }

  current.next = null;

  return resultHead;
};



l1 = new ListNode(2)
l1.next = new ListNode(6)
l1.next.next = new ListNode(8)

l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)

l3 = new ListNode(1)
l3.next = new ListNode(3)
l3.next.next = new ListNode(4)

result = merge_lists([l1, l2, l3])
output = "Here are the elements form the merged list: ";
while (result != null) {
  output += result.value + " ";
  result = result.next;
}
console.log(output);
