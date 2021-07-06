const find_string_anagrams = function(str, pattern) {
  const result_indexes = [];
  // TODO: Write your code here
  let start = 0,
    matches = 0;
  const freq = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!freq.has(pattern[i])) freq.set(pattern[i], 0);
    freq.set(pattern[i], freq.get(pattern[i]) + 1);
  }
  console.log('--------');
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    console.log(char);
    if (freq.has(char)) {
      const newCount = freq.get(char) - 1;
      console.log('before', freq);
      freq.set(char, newCount);
      console.log('after', freq);
      if (newCount === 0) matches++;
    }

    if (matches === freq.size) result_indexes.push(start);

    if (end + 1 >= pattern.length) {
      const left = str[start];
      if (freq.has(left)) {
        const prevCount = freq.get(left);
        if (prevCount === 0) matches--;
        freq.set(left, prevCount + 1);
      }
      start++;
    }
  }

  return result_indexes;
};

console.log(find_string_anagrams('pppppppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));