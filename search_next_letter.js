const search_next_letter = function(letters, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz',
    keyIndex = alphabet.indexOf(key);
  let left = 0, right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2),
      midIndex = alphabet.indexOf(letters[mid]);
    if (left === right || letters[mid] === key) {
      if (left === letters.length - 1) return letters[0];
      return letters[left + 1];
    }

    if (keyIndex > midIndex) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};


console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'h'));
