const isPalindrome = (s) => {
  const mid = Math.floor((s.length - 1) / 2);
  for (let i = 0; i <= mid; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('abba'));
// console.log(isPalindrome('edede'));

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const alphaNum = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let canDelete = true,
    left = 0,
    right = s.length - 1;

  while (left < right) {
    while (s[left] && alphaNum.indexOf(s[left].toLowerCase()) < 0) left++;
    while (s[right] && alphaNum.indexOf(s[right].toLowerCase()) < 0) right--;
    if ((!s[left] && s[right]) || (s[left] && !s[right])) return false;
    if (!s[left] && !s[right]) return true;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      const leftStr = s.substring(0, left) + s.substring(left + 1, s.length),
        rightStr = s.substring(0, right) + s.substring(right + 1, s.length);

      return isPalindrome(leftStr) || isPalindrome(rightStr);
    }
    left++;
    right--;
  }
  return true;
};

// console.log(validPalindrome('A man, a plan, a canal: Panama'));
// console.log(validPalindrome('race a car'));
// console.log(validPalindrome('r'));
// console.log(validPalindrome('0P'));
// console.log(validPalindrome(' '));
console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abc'));
console.log(validPalindrome('eedede'));
console.log(validPalindrome('abbeta'));