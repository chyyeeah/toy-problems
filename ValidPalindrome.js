/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  const alphanum = 'abcdefghijklmnopqrstuvwxyz1234567890';

  while (left <= right) {
    while (s[left] && alphanum.indexOf(s[left].toLowerCase()) < 0) left++;
    while (s[right] && alphanum.indexOf(s[right].toLowerCase()) < 0) right--;

    if ((s[left] && !s[right]) || (!s[left] && s[right])) return false;
    if (!s[left] && !s[right]) return true;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};
// var isPalindrome = function (s) {
//   const alphaNum = 'abcdefghijklmnopqrstuvwxyz1234567890';
//   let cleansedStr = '';
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i].toLowerCase();
//     if (alphaNum.indexOf(char) > -1) cleansedStr += char;
//   }

//   const stack = [],
//     mid = Math.floor((cleansedStr.length - 1) / 2);

//   for (let i = 0; i <= mid; i++) {
//     stack.push(cleansedStr[i]);
//   }

//   if (cleansedStr.length % 2 === 1) stack.pop();
//   for (let i = mid + 1; i < cleansedStr.length; i++) {
//     const char = stack.pop();
//     if (char !== cleansedStr[i]) return false;
//   }

//   return true;
// };

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('r'));
console.log(isPalindrome('0P'));
console.log(isPalindrome(' '));
