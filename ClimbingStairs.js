/**
 * @param {number} n
 * @return {number}
*/
/*
Runtime: 68 ms, faster than 96.89% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 38.2 MB, less than 83.37% of JavaScript online submissions for Climbing Stairs.
*/
var cache = {};
var climbStairs = function(n) {
  if (n < 2) return 1;
  if (!cache[n]) {
    result = climbStairs(n - 1) + climbStairs(n - 2);
    cache[n] = result;
  }
  return cache[n];
};

console.log(climbStairs(4));
console.log(climbStairs(45));