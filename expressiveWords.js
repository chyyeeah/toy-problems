/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  if (words.length < 1) return 0;
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let p1 = 0, p2 = 0;

    if (word.length > s.length) continue;

    while (word[p1] === s[p2] && p1 < word.length && p2 < s.length) {
      let longCount1 = longCount2 = 1, la1 = p1, la2 = p2;
      while (word[la1] === word[la1 + 1]) {
        longCount1++;
        la1++
      }

      while (s[la2] === s[la2 + 1]) {
        longCount2++;
        la2++;
      }

      if (longCount1 > longCount2) {
        break;
      }

      if (longCount2 > 2) {
        while (word[p1] === word[p1 + 1]) {
          p1++
        }
        p2 = la2 + 1;
        p1++;
      } else {
        p1++;
        p2++;
      }
    }
    if (p1 === word.length && p2 === s.length) counter++;
  }
  return counter;
};

/**Mistakes
 * 14: didn't do a check to see if the word was longer than the expressive word
 * 18, 28: didn't check if elongated chars of words[i] was shorter than the
 *          corresponding elongated chars of s
 */

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
console.log(expressiveWords("zzzzzyyyyy", ["zzyy","zy","zyy"]));
console.log(expressiveWords("aaa", ["aaaa"]));
console.log(expressiveWords("heeelllooo", ["hellllo"]));