class MinHeap {
  constructor() {
    this.store = [];
  }

  push(num) {
    this.store.push(num);
    let n = this.store.length - 1,
      p = Math.floor((n - 1) / 2);

    while (this.store[p]  !== undefined&& this.store[n] < this.store[p]) {
      [this.store[n], this.store[p]] = [this.store[p], this.store[n]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
  }

  pop() {
    let n = this.store.length - 1;
    [this.store[n], this.store[0]] = [this.store[0], this.store[n]];
    const result = this.store.pop();

    n = 0;
    let lc = (n * 2) + 1,
      rc = (n * 2) + 2;

    while (
      this.store[lc] !== undefined && this.store[lc] < this.store[n] ||
      this.store[rc]  !== undefined&& this.store[rc] < this.store[n]
    ) {
      if (this.store[rc] !== undefined && this.store[rc] < this.store[lc]) {
        [this.store[n], this.store[rc]] = [this.store[rc], this.store[n]];
        n = rc;
      } else {
        [this.store[n], this.store[lc]] = [this.store[lc], this.store[n]];
        n = lc;
      }
      lc = (n * 2) + 1;
      rc = (n * 2) + 2;
    }

    return result;
  }

  peek() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }
}

class MaxHeap {
  constructor() {
    this.store = [];
  }

  push(num) {
    this.store.push(num);
    let n = this.store.length - 1,
      p = Math.floor((n - 1) / 2);

    while (this.store[p] !== undefined && this.store[n] > this.store[p]) {
      [this.store[n], this.store[p]] = [this.store[p], this.store[n]];
      n = p;
      p = Math.floor((n - 1) / 2);
    }
  }

  pop() {
    let n = this.store.length - 1;
    [this.store[n], this.store[0]] = [this.store[0], this.store[n]];
    const result = this.store.pop();

    n = 0;
    let lc = (n * 2) + 1,
      rc = (n * 2) + 2;

    while (
      this.store[lc] !== undefined && this.store[lc] > this.store[n] ||
      this.store[rc] !== undefined && this.store[rc] > this.store[n]
    ) {
      if (this.store[rc] !== undefined && this.store[rc] > this.store[lc]) {
        [this.store[n], this.store[rc]] = [this.store[rc], this.store[n]];
        n = rc;
      } else {
        [this.store[n], this.store[lc]] = [this.store[lc], this.store[n]];
        n = lc;
      }
      lc = (n * 2) + 1;
      rc = (n * 2) + 2;
    }

    return result;
  }

  peek() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.min = new MinHeap();
  this.max = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num < this.max.peek()) {
    this.max.push(num);
  } else {
    this.min.push(num);
  }

  if (this.min.size() + 1 < this.max.size()) {
    this.min.push(this.max.pop());
  }

  if (this.max.size() < this.min.size()) {
    this.max.push(this.min.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if ((this.min.size() + this.max.size()) % 2 === 0) {
    return (this.min.peek() + this.max.peek()) / 2;
  } else {
    return this.max.peek();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const obj = new MedianFinder();
obj.addNum(155);
console.log(obj.findMedian());
obj.addNum(66);
console.log(obj.findMedian());
obj.addNum(114);
console.log(obj);
obj.addNum(0);
obj.addNum(60);
obj.addNum(73);
obj.addNum(109);
console.log(obj.findMedian());
obj.addNum(26);
// console.log(obj);
console.log(obj.findMedian());