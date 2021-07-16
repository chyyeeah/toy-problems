/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this._capacity = capacity;
  this._store = {};
  this._tracker = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this._store[key] !== undefined) {
    const idx = this._tracker.indexOf(key);
    this._tracker.splice(idx, 1);
    this._tracker.unshift(key);
    return this._store[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this._store[key] !== undefined) {
    const idx = this._tracker.indexOf(key);
    this._tracker.splice(idx, 1);
  }
  if (this._tracker.length === this._capacity) {
    const lru = this._tracker.pop();
    delete this._store[lru];
  }
  this._store[key] = value;
  this._tracker.unshift(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */