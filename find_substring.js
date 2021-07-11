const find_substring = function(str, pattern) {
  // TODO: Write your code here
  let start = 0,
    matches = 0,
    result = '';
  const freq = new Map();

  // build out the frequency count
  for (let i = 0; i < pattern.length; i++) {
    if (!freq.has(pattern[i])) freq.set(pattern[i], 0);
    freq.set(pattern[i], freq.get(pattern[i]) + 1);
  }

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (freq.has(char)) {
      const newCount = freq.get(char) - 1;
      freq.set(char, newCount);
      if (newCount === 0) matches++;
    }

    while (matches === freq.size) {
      if (!result || (end - start + 1) < result.length) result = str.substring(start, end + 1);
      const left = str[start];
      start++;
      if (freq.has(left)) {
        const currentCount = freq.get(left);
        if (currentCount === 0) matches--;
        freq.set(left, currentCount + 1);
      }
    }
  }
  return result;
}

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));