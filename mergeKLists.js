class MinHeap {
  constructor() {
    this.store = [];
  }

  insert(node) {
    this.store.push(node);
    let current = this.store.length - 1,
      parent = Math.floor((current - 1) / 2);

    while (current >= 0 && this.store[parent] && this.store[parent].val > this.store[current].val) {
      [this.store[parent], this.store[current]] = [this.store[current], this.store[parent]];
      current = parent;
      parent = Math.floor((current - 1) / 2);
    }
  }

  remove() {
    [this.store[0], this.store[this.store.length - 1]] = [this.store[this.store.length - 1], this.store[0]];
    const top = this.store.pop();

    let current = 0,
      lchild = (current * 2) + 1,
      rchild = (current * 2) + 2;

    while (
      this.store[lchild] && this.store[lchild].val < this.store[current].val
      || this.store[rchild] && this.store[rchild].val < this.store[current].val
    ) {
      if (!this.store[rchild] || this.store[lchild].val < this.store[rchild].val) {
        [this.store[current], this.store[lchild]] = [this.store[lchild], this.store[current]];
        current = lchild;
      } else if (this.store[rchild].val < this.store[lchild].val) {
        [this.store[current], this.store[rchild]] = [this.store[rchild], this.store[current]];
        current = rchild;
      }
      lchild = (current * 2) + 1;
      rchild = (current * 2) + 2;
    }

    return top;
  }

  peek() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const minHeap = new MinHeap()

  lists.forEach((head) => {
    if (head) minHeap.insert(head);
  });

  let head = current = new ListNode(0);

  while (minHeap.size() > 0) {
    const node = minHeap.remove();
    current.next = node;
    current = current.next;
    if (node.next) minHeap.insert(node.next);
  }
  current.next = null;

  return head.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};

const makeLinkedList = (list) => {
  const head = current = new ListNode(0);
  list.forEach((e) => {
    current.next = new ListNode(e);
    current = current.next;
  });
  return head.next;
};

// [[-8,-7,-6,-3,-2,-2,0,3],[-10,-6,-4,-4,-4,-2,-1,4],[-10,-9,-8,-8,-6],[-10,0,4]]

let list1 = makeLinkedList([-8, -7, -6, -3, -2, -2, 0, 3]),
  list2 = makeLinkedList([-10, -6, -4, -4, -4, -2, -1, 4]),
  list3 = makeLinkedList([-10, -9, -8, -8, -6], [-10, 0, 4]);

let output = mergeKLists([list1, list2, list3]);
while (output) {
  console.log(output.val);
  output = output.next;
}