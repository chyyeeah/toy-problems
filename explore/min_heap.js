class Heap {
  constructor() {
    this.store = [];
  }

  insert(num) {
    this.store.push(num);
    let node = this.store.length - 1,
      parent = Math.floor((node - 1) / 2);
    while (this.store[node] < this.store[parent]) {
      [this.store[node], this.store[parent]] = [this.store[parent], this.store[node]];
      node = parent;
      parent = Math.floor((node - 1) / 2);
    }
    console.log(this.store);
  }
}

const testHeap = new Heap();
testHeap.insert(18);
testHeap.insert(21);
testHeap.insert(35);
testHeap.insert(28);
testHeap.insert(5);
testHeap.insert(10);
testHeap.insert(11);
testHeap.insert(15);
testHeap.insert(20);
testHeap.insert(2);
testHeap.insert(3);
testHeap.insert(7);
testHeap.insert(1);
testHeap.insert(4);