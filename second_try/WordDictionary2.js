// dictionary is empty
// word is added
// word not found
// word is found
class Trie {
  constructor(char) {
    this.val = char;
    this.children = {};
  }
}

/**
* Initialize your data structure here.
*/
var WordDictionary = function (letter) {
  this.root = new Trie('root');
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    let next;
    if (node.children[char]) {
      next = node.children[char];
    } else {
      next = new Trie(char);
      node.children[char] = next;
    }
    node = next;
  }
  node.children['end'] = 1;
};

/**
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {
  const stack = [];
  stack.push([this.root, word]);
  while (stack.length > 0) {
    const [node, str] = stack.pop();
    if (str.length < 1 && node.children['end']) return true;
    const char = str[0];
    if (char && node.children[char]) {
      stack.push([node.children[char], str.substring(1, str.length)])
    }
    if (char && char === '.') {
      for (let key in node.children) {
        if (key !== 'end') {
          stack.push([node.children[key], str.substring(1, str.length)]);
        }
      }
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
obj.addWord('bad');
obj.addWord('dad');
obj.addWord('mad');
obj.addWord('aa');
console.log(obj.search('pad'));
console.log(obj.search('bad'));
console.log(obj.search('.ad'));
console.log(obj.search('b..'));
console.log(obj.search('...'));
console.log(obj.search('aa'));
console.log(obj.search('a.'));
console.log(obj.search('.a'));
console.log(obj.search('..'));


// console.log(obj.children['r'].children['a'].children['z']);
// var param_2 = obj.search(word);