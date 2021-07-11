const find_permutation = function(str, pattern) {
  // TODO: Write your code here
  let start = 0,
    matches = 0;
  const freq = new Map();;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!freq.has(char)) freq.set(char, 0);
    freq.set(char, freq.get(char) + 1);
  }
  console.log('----');
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    console.log(char, matches);
    if (freq.has(char)) {
      const newCount = freq.get(char) - 1;
      freq.set(char, newCount);
      if (newCount === 0) matches++;
    }

    if (matches === freq.size) return true;

    if (end + 1 >= pattern.length) {
      const left = str[start];
      if (freq.has(left)) {
        if (freq.get(left) === 0) matches--;
        console.log('after', matches);
        freq.set(left, freq.get(left) + 1);
      }
      start++;
    }
    console.log(freq);
  }

  return false;
};

console.log(find_permutation('odicf', 'dc'));
// console.log(find_permutation('ppqp', 'pq'));
// console.log(find_permutation('abbcabc', 'abc'));
// console.log(find_permutation('abbab', 'abc'));