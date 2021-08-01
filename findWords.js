/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class Trie {
  constructor(letter) {
    this.value = letter;
    this.children = {};
  }

  search(word) {
    const visited = [this];
    let node = this;
    if (node.value !== word[0]) return false;

    for (let char of word.substring(1, word.length)) {
      if (!node.children[char] || visited.indexOf(node.children[char]) > -1) {
        return false;
      }
      node = node.children[char];
      visited.push(node);
    }
    return true;
  }
}

var findWords = function (board, words) {
  const boardTrie = [],
  hashMap = {};

  // create a shadow board consisting of just tries so I know exactly which trie to create a relationship with
  for (let i = 0; i < board.length; i++) {
    boardTrie.push(new Array(board.length));
  }

  // iterate over board using bfs
    // build a trie as I go
    // should be a bi-directional relationship
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const letter = board[row][col],
        node = new Trie(letter);
      console.log(row, col);
      boardTrie[row][col] = node;

      if (!hashMap[letter]) hashMap[letter] = [];
      hashMap[letter].push(node);

      // create a relationship with the letter above
      if (board[row - 1] && board[row - 1][col]) {
        const upTrie = boardTrie[row - 1][col];
        node.children[upTrie.value] = upTrie;
        upTrie.children[node.value] = node;
      }

      // create a relationship with the letter to the left
      if (board[row][col - 1]) {
        const leftTrie = boardTrie[row][col - 1];
        node.children[leftTrie.value] = leftTrie;
        leftTrie.children[node.value] = node;
      }
    }
  }
  console.log(hashMap);
  const found = [];
  // iterate over words
    // check if first letter exists
      // iterate over array value associated with the first letter key
        // perform a search on the word
  words.forEach(word => {
    const firstLetter = word[0];
    if (hashMap[firstLetter]) {
      for (let i = 0; i < hashMap[firstLetter].length; i++) {
        if (hashMap[firstLetter][i].search(word)) {
          found.push(word);
          break;
        }
      }
    }
  });

  return found;
};

// let board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
// let words = ["oath", "pea", "eat", "rain"];
// console.log(findWords(board, words));
// board = [["a", "b"], ["c", "d"]];
// words = ["abcb", "abdc"];
// console.log(findWords(board, words));
// board = [["a", "a"]];
// words = ["aa"];
// console.log(findWords(board, words));
board = [
  ["a","b","c"],
  ["a","e","d"],
  ["a","f","g"]];
words = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"];
console.log(findWords(board, words));