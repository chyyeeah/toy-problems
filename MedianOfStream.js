class MinHeap {
  constructor() {
    this.store = [];
  }

  insert(num) {
    this.store.push(num);
    if (this.size() < 2) return;

    let n = this.size() - 1,
      p = Math.floor((n - 1) / 2);
    while (this.store[p] && this.store[p] > this.store[n]) {
      [[this.store[p]], this.store[n]] = [[this.store[n]], this.store[p]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
  }

  size() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  pop() {
    return this.store.shift();
  }
}

class MaxHeap {
  constructor() {
    this.store = [];
  }

  insert(num) {
    this.store.push(num);
    if (this.size() < 2) return;

    let n = this.size() - 1,
      p = Math.floor((n - 1) / 2);

    while (this.store[p] && this.store[p] < this.store[n]) {
      [[this.store[p]], this.store[n]] = [[this.store[n]], this.store[p]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
  }

  size() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  pop() {
    return this.store.shift();
  }
}

class MedianOfAStream {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  insert_num(num) {
   if (num <= this.maxHeap.size()) {
     this.maxHeap.insert(num);
   } else {
     this.minHeap.insert(num);
   }

   // rebalance
   if (this.minHeap.size() + 1 < this.maxHeap.size()) {
    const num = this.maxHeap.pop();
    this.minHeap.insert(num);
   }

   if (this.maxHeap.size() < this.minHeap.size()) {
    const num = this.minHeap.pop();
    this.maxHeap.insert(num);
  }

   return;
  }

  find_median() {
    if (this.maxHeap.size() > this.minHeap.size()) return this.maxHeap.peek();
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

const heaps = new MedianOfAStream();
heaps.insert_num(5);
heaps.insert_num(10);
heaps.insert_num(20);
heaps.insert_num(12);
heaps.insert_num(1);
heaps.insert_num(51);
heaps.insert_num(17);
heaps.insert_num(43);
heaps.insert_num(11);
heaps.insert_num(22);
heaps.insert_num(15);
console.log(heaps.find_median());

// var medianOfAStream = new MedianOfAStream()
// medianOfAStream.insert_num(3)
// medianOfAStream.insert_num(1)
// console.log(`The median is: ${medianOfAStream.find_median()}`)
// medianOfAStream.insert_num(5)
// console.log(`The median is: ${medianOfAStream.find_median()}`)
// medianOfAStream.insert_num(4)
// console.log(`The median is: ${medianOfAStream.find_median()}`)
