class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// const find_length = (head) => {
//   let length = 0;

//   while (head !== null) {
//     head = head.next;
//     length++;
//   }

//   return length;
// };

// const find_middle_of_linked_list = function(head) {
//   const length = find_length(head);
//   let midpoint = length % 2 === 0 ? (length / 2) + 1 : Math.ceil(length / 2);
//   while (midpoint > 0) {
//     head = head.next;
//     midpoint--;
//   }

//   return head;
// }

const find_middle_of_linked_list = function(head) {
  let slow = head, fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

head.next.next.next.next.next = new Node(6)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

head.next.next.next.next.next.next = new Node(7)
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
