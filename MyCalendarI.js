var MyCalendar = function () {
  this.schedule = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.schedule.length < 1) {
    this.schedule.push([start, end]);
    return true;
  }
  if (end <= this.schedule[0][0]) {
    this.schedule.unshift([start, end]);
    return true;
  }
  if (start >= this.schedule[this.schedule.length - 1][1]) {
    this.schedule.push([start, end]);
    return true;
  }

  let inserted = false;

  for (let i = 0; i < this.schedule.length; i++) {
    const interval = this.schedule[i];
    if (!inserted && start < interval[1]) {
      if (end > interval[0]) return false;
      this.schedule.splice(i, 0, [start, end]);
      inserted = true;
      i++;
    }
  }
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

var obj = new MyCalendar()
// console.log(obj.book(10,20));
// console.log(obj.book(15,25));
// console.log(obj.book(20,30));

// [47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]
console.log(obj.book(47,50));
console.log(obj.book(33,41));
console.log(obj.book(39,45));
console.log(obj.book(33,42));
console.log(obj.book(25,32));
console.log(obj.book(26,35));
console.log(obj.book(19,25));
console.log(obj.book(3,8));
console.log(obj.book(8,13));
console.log(obj.book(18,27));
