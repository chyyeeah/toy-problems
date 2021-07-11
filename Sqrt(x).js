/**
 * @param {number} x
 * @return {number}
 */
/*
Runtime: 96 ms, faster than 69.58% of JavaScript online submissions for Sqrt(x).
Memory Usage: 40.2 MB, less than 14.45% of JavaScript online submissions for Sqrt(x).
*/
// var mySqrt = function(x) {
//   return Math.floor(x ** .5);
// };
var mySqrt = function(x) {
  if (x < 2) return x;

  var left = 0;
  var right = Math.floor(x / 2);
  var mid;

  while (left < right) {
    mid = Math.floor((right + left) / 2);

    if ((mid ** 2) > x) {
      right = mid - 1;
      mid = mid - 1;
    } else if ((mid ** 2) < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return mid;
};

console.log(mySqrt(4) === 2);
console.log(mySqrt(8) === 2);
console.log(mySqrt(6) === 2);