const generateNeighbors = (word, wordSet) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz',
    result = [],
    wordArr = word.split('');
  for (let i = 0; i < wordArr.length; i++) {
    const temp = wordArr[i];
    for (let j = 0; j < alpha.length; j++) {
      wordArr[i] = alpha[j];
      const proposedWord = wordArr.join('');
      if (wordSet.has(proposedWord)) result.push(proposedWord);
    }
    wordArr[i] = temp;
  }
  // console.log('neighbors', result);
  return result;
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const queue = [[1, beginWord, new Set(wordList), [beginWord]]],
    result = [],
    hashMap = {};
  let minPath = Infinity;

  while (queue.length > 0) {
    const size = queue.length;
    console.log(size);
    for (let i = 0; i < size; i++) {
      const [steps, word, words, path] = queue.shift();
      if (steps > minPath) break;
      if (word === endWord) {
        minPath = Math.min(minPath, steps);
        result.push(path);
      }

      let neighbors;
      if (hashMap[word]) {
        neighbors = hashMap[word];
      } else {
        hashMap[word] = generateNeighbors(word, words);
        neighbors = hashMap[word];
      }

      neighbors.forEach(nb => {
        if (words.has(nb)) {
          const newWords = new Set(words);
          newWords.delete(nb);
          queue.push([steps + 1, nb, newWords, [...path, nb]]);
        }
      });
    }
  }

  return result;
};

// console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
console.log(findLadders("qa",
"sq",
["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]));