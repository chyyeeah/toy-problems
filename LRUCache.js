class ListNode {
  constructor(key, val, prev, next) {
    this.key = key !== undefined ? key : null;
    this.val = val !== undefined ? val : null;
    this.prev = prev ? prev : null;
    this.next = next ? next : null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.tail = new ListNode(null, null, this.head, null);
  this.head = new ListNode(null, null, null, this.tail);
  this.hashMap = {};
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const current = this.hashMap[key];
  if (!current) return -1;
  const prev = current.prev,
    next = current.next;

  prev.next = next;
  next.prev = prev;

  current.prev = this.head;
  current.next = this.head.next;
  this.head.next.prev = current;
  this.head.next = current;
  return current.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let current;
  if (this.hashMap[key]) {
    current = this.hashMap[key];
    current.val = value;
    current.next.prev = current.prev;
    current.prev.next = current.next;
    current.prev = this.head;
    current.next = this.head.next;
  } else {
    current = new ListNode(key, value, this.head, this.head.next);
    this.hashMap[key] = current;
    this.size++;
  }
  this.head.next.prev = current;
  this.head.next = current;

  if (this.size > this.capacity) {
    const last = this.tail.prev;
    this.tail.prev = last.prev;
    last.prev.next = this.tail;
    delete this.hashMap[last.key];
    this.size--;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
obj.put(3, 3);
console.log(obj.get(2));
obj.put(4, 4);
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));
console.log('~~~');
// console.log(obj);
obj = new LRUCache(2);
obj.put(2,1);
obj.put(1,1);
obj.put(2,3);
obj.put(4,1);
console.log(obj.get(1));
console.log(obj.get(2));
// console.log(obj);
