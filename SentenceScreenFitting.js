/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function (sentence, rows, cols) {
  let counter = 0,
    row = 0,
    colRemain = cols,
    idx = 0;

  while (row < rows) {
    const word = sentence[idx];
    if (word.length <= colRemain) {
      colRemain -= word.length + 1;
      idx++;
      if (idx === sentence.length) {
        counter++;
        idx = 0;
      }
    } else {
      row++;
      colRemain = cols;
    }
  }

  return counter;
};

// var wordsTyping = function (sentence, rows, cols) {
//   let counter = -1,
//     idx = 0,
//     prevIdx = -1;

//   for (let i = 0; i < rows; i++) {
//     let filledCols = 0;
//     while (true) {
//       if (prevIdx !== idx && idx % (sentence.length) === 0) counter++;
//       const newLength = filledCols + sentence[idx % (sentence.length)].length;
//       prevIdx = idx;
//       if (newLength > cols) break;

//       filledCols = newLength + 1;
//       idx++;
//     }
//   }

//   return counter;
// };

console.log(wordsTyping(["hello","world"], 2, 8));
console.log(wordsTyping(["a", "bcd", "e"], 3, 6));
console.log(wordsTyping(["i","had","apple","pie"], 4, 5));
console.log(wordsTyping(['f', 'p', 'a'], 8, 7));
console.log(wordsTyping(['h'], 2, 3));