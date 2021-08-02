/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.store = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   this.store.push(val);
   this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const popped = this.store.pop();
  if (popped === this.min) {
    let min = Infinity;
    this.store.forEach(e => {
      console.log('e', e);
      min = Math.min(min, e);
    });
    this.min = min;
  }
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 *  ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 */
 var obj = new MinStack();
 obj.push(-2);
 obj.push(0);
 obj.push(-3);
 var param_4 = obj.getMin();
 console.log(param_4);
 console.log(obj.pop());
//  console.log(obj);
 var param_3 = obj.top();
 console.log(param_3);
 var param_5 = obj.getMin();
 console.log(param_5);