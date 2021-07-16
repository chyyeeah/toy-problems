/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  var isBefore = (word1, word2, order) => {
    let pointer = 1;
    while (pointer < word1.length && pointer < word2.length) {
      const char1 = word1[pointer];
      const char2 = word2[pointer];
      if (char1 !== char2) {
        const idxChar1 = order.indexOf(char1);
        const idxChar2 = order.indexOf(char2);
        if (idxChar1 < idxChar2) {
          return true;
        } else {
          return false;
        }
      }
      pointer++;
    }

    if (pointer >= word1.length) return true;
    return false;
  };

  let prevWord = words[0];
  let prevIndex = order.indexOf(words[0][0]);

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word[0] === prevWord[0]) {
      if (!isBefore(prevWord, word, order)) return false;
    } else {
      let pointer = prevIndex + 1;
      while (order[pointer] !== word[0]) {
        if (pointer >= order.length) return false;
        pointer++;
      }
      prevIndex = pointer;
      prevWord = word;
    }
  }
  return true;
};