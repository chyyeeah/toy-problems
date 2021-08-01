/**
 * Initialize your data structure here.
 */
var Trie = function (letter) {
  this.value = letter !== undefined ? letter : 'root';
  this.children = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (word === '') {
    this.children['end'] = null;
    return;
  };

  const letter = word[0];
  let newTrie;
  if (this.children[letter]) {
    newTrie = this.children[letter];
  } else {
    newTrie = new Trie(letter);
    this.children[letter] = newTrie;
  }
  newTrie.insert(word.substring(1, word.length));
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (word.length < 1 && this.children.hasOwnProperty('end')) return true;

  const letter = word[0];
  if (this.children[letter]) {
    return this.children[letter].search(word.substring(1, word.length));
  } else {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (prefix.length < 1) return true;

  const letter = prefix[0];
  if (this.children[letter]) {
    return this.children[letter].startsWith(prefix.substring(1, prefix.length));
  } else {
    return false;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert('hello');
obj.insert('helly');
console.log('hello', obj.search('hello'));
console.log('hel', obj.search('hel'));
console.log('hel', obj.startsWith('hel'));
console.log('ha', obj.startsWith('ha'));
