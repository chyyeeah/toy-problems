const neighbors = (word) => {
  const neighbors = [],
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    chars = word.split('');

  for (let i = 0; i < chars.length; i++) {
    const temp = chars[i];
    for (let j = 0; j < alphabet.length; j++) {
      chars[i] = alphabet[j];
      neighbors.push(chars.join(''));
    }
    chars[i] = temp;
  }

  return neighbors;
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = [],
    words = new Set(wordList);
  let steps = 1;
  queue.push(beginWord);

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const word = queue.shift(),
        wordNeighbors = neighbors(word);
      if (word === endWord) return steps;
      for (let j = 0; j < wordNeighbors.length; j++) {
        const neighbor = wordNeighbors[j];
        if (words.has(neighbor)) {
          queue.push(neighbor);
          words.delete(neighbor);
        }
      }
    }

    steps++;
  }

  return 0;
};

let beginWord = 'hit',
  endWord = 'cog',
  wordList = ["hot","dot","dog","lot","log","cog"];
console.log(ladderLength(beginWord, endWord, wordList));

beginWord = "hit";
endWord = "cog";
wordList = ["hot","dot","dog","lot","log"];
console.log(ladderLength(beginWord, endWord, wordList));
