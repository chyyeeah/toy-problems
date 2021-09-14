class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    let result = "Traversal using 'next' pointer: ";
    let current = this;
    while (current != null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
};

const connect_all_siblings = function (root) {
  const queue = [];
  const dummy = new TreeNode(null);
  let current = dummy;

  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      current.next = node;
      current = current.next;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  current.next = null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
connect_all_siblings(root)
root.print_tree()
