class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function deleteNode(nodeToDelete) {

//   // Delete the input node from the linked list
//   let currentNode = head;
//   let prevNode;

//   while (currentNode !== null) {
//     if (currentNode === nodeToDelete) {
//       if (prevNode && currentNode.next === null) {
//         throw new Error('wtf');
//       } else if (prevNode) {
//         prevNode.next = currentNode.next;
//       } else {
//         if (currentNode.next === null) throw new Error('wtf');
//         head = currentNode.next;
//       }
//       break;
//     }

//     prevNode = currentNode;
//     currentNode = currentNode.next;
//   }
// }

function deleteNode(nodeToDelete) {

  // Delete the input node from the linked list
  nodeToDelete.value = nodeToDelete.next.value;
  nodeToDelete.next = nodeToDelete.next.next;
}

desc = 'node at end';
head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
nodeToDelete = appendToList(head, 4);

assertThrows(() => deleteNode(nodeToDelete), desc);

function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next;
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}