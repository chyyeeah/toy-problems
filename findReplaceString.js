/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const replacementTracker = [], idxHashSet = new Set();

  for (let idx = 0; idx < indices.length; idx++) {
    const i = indices[idx];
    idxHashSet.add(i);
    let value;
    for (let p = i, sTracker = 0; sTracker < sources[idx].length; p++, sTracker++) {
      if (s[p] !== sources[idx][sTracker]) {
        value = null;
        break;
      }
    }
    if (value === undefined) value = targets[idx];
    replacementTracker[idx] = value;
  }

  let result = '', p = 0;

  for (let i = 0; i < s.length; i++) {
    if (idxHashSet.has(i)) {
      if (replacementTracker[p] !== null) {
        result += replacementTracker[p];
        let n = sources[p].length;
        while (n > 1) {
          i++;
          n--;
        }
      } else {
        result += s[i];
      }
      p++;
    } else {
      result += s[i];
    }
  }
  // console.log(replacementTracker);
  // console.log(result);
  return result;
};

// findReplaceString('abcd', [0,2], ['a','cd'], ['eee', 'ffff']);
// findReplaceString('abg', [0,2], ['a','cd'], ['eee', 'ffff']);
// findReplaceString('abcg', [0,2], ['a','cd'], ['eee', 'ffff']);
findReplaceString('abcd', [0,2], ['ab','ec'], ['eee', 'ffff']);
