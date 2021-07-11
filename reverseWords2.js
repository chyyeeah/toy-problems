/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  // s.reverse();
  // flip the array
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  // use 2 pointers to find the beginning and end of a word
  // flip word
  let start = 0,
    end = 0;

  while (start < s.length) {
    while (s[end] !== ' ' && end < s.length) {
      end++;
    }
    let offset = 0;
    for (let i = start; i < Math.floor((end + start) / 2); i++) {
      const temp = s[i];
      s[i] = s[end - 1 - offset];
      s[end - 1 - offset] = temp;
      offset++;
    }
    end++;
    start = end;
  }
};

let message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];
const reverse = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];

reverseWords(message);
console.log(message.join(''));

message = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
reverseWords(message);
console.log(message.join(''));