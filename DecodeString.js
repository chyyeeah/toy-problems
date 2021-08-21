/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function (s) {
//   let left = 0,
//     result = '';

//   for (let right = 0; right < s.length; right++) {
//     const char = s[right];

//     if ('1234567890'.indexOf(char) > -1) {
//       let start = right;
//       while ('1234567890'.indexOf(s[right]) > -1) {
//         left++;
//         right++;
//       }
//       let num = parseInt(s.substring(start, right)),
//         str = '',
//         o = c = 0;
//       right--;
//       left += 1;
//       while ((o !== c || o === 0) && right < s.length) {
//         if (s[right] === '[') o++;
//         if (s[right] === ']') c++;
//         right++;
//       }
//       str = decodeString(s.substring(left, right - 1));
//       for (let i = 0; i < num; i++) {
//         result += str;
//       }
//       right--;
//       left = right + 1;
//     } else {
//       result += char;
//       left++;
//     }
//   }
//   return result;
// };

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ']') {
      const chars = [];
      let popped = stack.pop();
      while (popped !== '[') {
        chars.push(popped);
        popped = stack.pop();
      }
      let multiplier = stack.pop();
      while ('1234567890'.indexOf(stack[stack.length - 1]) > -1) {
        multiplier = stack.pop() + multiplier;
      }

      let multiplied = [];
      for (let i = 0; i < parseInt(multiplier); i++) {
        multiplied = multiplied.concat(chars);
      }
      while (multiplied.length > 0) stack.push(multiplied.pop());
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

// console.log(decodeString("3[a]2[bc]") === "aaabcbc");
// console.log(decodeString("3[a2[c]]") === "accaccacc");
// console.log(decodeString("2[abc]3[cd]ef") === "abcabccdcdcdef");
// console.log(decodeString("abc3[cd]xyz") === "abccdcdcdxyz");
const lcx10 = 'leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode';
console.log(decodeString("10[leetcode]") === lcx10);