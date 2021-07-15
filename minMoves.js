/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function minMoves(arr) {
  // figure out the steps it takes to move 0 to the left
  // figure out the steps it takes to move 0 to the right
  // return the min
  let ltrNumOnes = 0,
      ltrMovesZero = 0;

  arr.forEach((num) => {
      if (num === 1) ltrNumOnes++;
      if (num === 0) ltrMovesZero += ltrNumOnes
  });

  let rtlNumOnes = 0,
      rtlMovesZero = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
      const num = arr[i];
      if (num === 1) rtlNumOnes++;
      if (num === 0) rtlMovesZero += rtlNumOnes;
  }

  return Math.min(ltrMovesZero, rtlMovesZero);
};