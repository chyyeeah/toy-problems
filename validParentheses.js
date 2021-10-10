/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [],
    complement = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (complement[char]) {
      if (complement[char] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('{'));
console.log(isValid('}'));