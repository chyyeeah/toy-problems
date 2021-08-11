/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
 var findReplaceString = function (s, indices, sources, targets) {
  const hashMap = {};

  indices.forEach((idx, i) => {
    hashMap[idx] = [sources[i], targets[i]];
  });

  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (hashMap[i]) {
      const src = hashMap[i][0],
        l = src.length,
        ss = s.substring(i, i + l);
      if (src === ss) {
        result += hashMap[i][1];
        i = i + l - 1;
      } else {
        result += s[i];
      }
    } else {
      result += s[i];
    }
  }

  return result;
};

// var findReplaceString = function (s, indices, sources, targets) {
//   const replacementTracker = [], idxHashSet = new Set();

//   for (let idx = 0; idx < indices.length; idx++) {
//     const i = indices[idx];
//     idxHashSet.add(i);
//     let value;
//     for (let p = i, sTracker = 0; sTracker < sources[idx].length; p++, sTracker++) {
//       if (s[p] !== sources[idx][sTracker]) {
//         value = null;
//         break;
//       }
//     }
//     if (value === undefined) value = targets[idx];
//     replacementTracker[idx] = value;
//   }

//   let result = '', p = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (idxHashSet.has(i)) {
//       if (replacementTracker[p] !== null) {
//         result += replacementTracker[p];
//         let n = sources[p].length;
//         while (n > 1) {
//           i++;
//           n--;
//         }
//       } else {
//         result += s[i];
//       }
//       p++;
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// };

/**Mistakes
 * Ultimately, I had the general gist of the solution.
 * My thought process:
 *  1. Build out a hashSet of relevant indices to indicate that a replacement may occur
 *  2. Build out a tracker array to see a replacement needs to occur at the corresponding index.
 *    - If a replacement didn't occur, the index would hold a null value
 *  3. Iterate over the original string and build out the new string in result
 * Pitfalls: complicated, uneccessary extra work
 *
 * Better solution:
 * - Create a hashMap with the key as the corresponding index for a source/target tuple
 * - Iterate over the original string and build out the new string
 *
 * Learning moment: NAIL DOWN YOUR PLAN OF ATTACK
 */

// console.log(findReplaceString('abcd', [0,2], ['a','cd'], ['eee', 'ffff']));
// console.log(findReplaceString('abg', [0,2], ['a','cd'], ['eee', 'ffff']));
// console.log(findReplaceString('abcg', [0,2], ['a','cd'], ['eee', 'ffff']));
console.log(findReplaceString('abcd', [0,2], ['ab','ec'], ['eee', 'ffff']));
console.log(findReplaceString('abcd', [0,2], ['a','cd'], ['eee', 'ffff']));
