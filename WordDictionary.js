/**
 * Initialize your data structure here.
 */
var WordDictionary = function (letter) {
  this.value = letter !== undefined ? letter : 'root';
  this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (word.length < 1) return this.children['end'] = null;

  const letter = word[0];
  let node;
  if (this.children[letter]) {
    node = this.children[letter];
  } else {
    node = new WordDictionary(letter);
    this.children[letter] = node;
  }
  node.addWord(word.substring(1, word.length));
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const stack = [[this, word]];

  while (stack.length > 0) {
    const [node, word] = stack.pop();
    if (word.length < 1 && node.children.hasOwnProperty('end')) return true;

    const letter = word[0];
    if (letter === '.') {
      const childrenLength = Object.keys(node.children).length;
      if (childrenLength > 0) {
        for (let key in node.children) {
          if (node.children[key]) stack.push([node.children[key], word.substring(1, word.length)]);
        }
      }
    }

    if (node.children[letter]) {
      stack.push([node.children[letter], word.substring(1, word.length)]);
    }
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary();
// obj.addWord('hi');
// console.log(obj.children['h'].children['i'])
// console.log(obj.search('hello'));
// console.log(obj.search('hi'));
// obj.addWord('hello');
// console.log(obj.search('hello'));
// console.log(obj.search('h.llo'));

// ["WordDictionary","addWord","addWord","search","search","search","search","search","search"]
// [[],["a"],["a"],["."],["a"],["aa"],["a"],[".a"],["a."]]
obj.addWord('a');
obj.addWord('a');
console.log(obj.search('.'));
console.log(obj.search('a'));
console.log(obj.search('aa'));
console.log(obj.search('a'));
console.log(obj.search('.a'));
console.log(obj.search('a.'));