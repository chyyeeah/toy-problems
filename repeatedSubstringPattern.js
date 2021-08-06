/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;
  const mid = Math.floor((s.length - 1) / 2);

  for (let i = 0; i <= mid; i++) {
    const substring = s.substring(0, i + 1);
    let temp = '';
    while (temp.length < s.length) {
      temp += substring;
    }
    if (temp === s) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
console.log(repeatedSubstringPattern('abcabcabcabc'));