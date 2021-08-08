/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length < 1) return s;
  if (t.length > s.length) return '';

  const freq = {};
  for (let i = 0; i < t.length; i++) {
    if (!freq[t[i]]) freq[t[i]] = 0;
    freq[t[i]]++;
  }

  let left = 0,
    matches = 0,
    min = Infinity,
    minString = '';

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (freq[char] !== undefined) {
      freq[char]--;
      if (freq[char] === 0) matches++;
    }
    while (matches === Object.keys(freq).length && left < s.length) {
      if ((right - left + 1) < min) {
        min = right - left + 1;
        minString = s.substring(left, right + 1);
      }
      if (freq[s[left]] !== undefined) {
        freq[s[left]]++;
        if (freq[s[left]] > 0) matches--;
      }
      left++;
    }
  }

  return minString;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));
