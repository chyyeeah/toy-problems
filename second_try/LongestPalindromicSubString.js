/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
  let max = 0,
    result = '';

  for (let start = s.length - 1; start >= 0; start--) {
    for (let end = start; end < s.length; end++) {
      if ((end - start + 1) < 3) {
        if (s[start] === s[end]) {
          dp[start][end] = 1;
          let tempMax = dp[start][end - 1] ? 2 : 1;
          if (tempMax > max) {
            max = tempMax;
            result = s.substring(start, end + 1);
          }
        }
      } else {
        if (s[start] === s[end] && dp[start + 1][end - 1]) {
          dp[start][end] = 1;
          let tempMax = end - start + 1;
          if (tempMax > max) {
            max = tempMax;
            result = s.substring(start, end + 1);
          }
        }
      }
    }
  }
  return result;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('babba'));