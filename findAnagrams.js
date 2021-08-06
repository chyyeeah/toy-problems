/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const results = [],
    hashMap = {};
  if (p.length > s.length) return results;

  for (let i = 0; i < p.length; i++) {
    if (!hashMap[p[i]]) hashMap[p[i]] = 0;
    hashMap[p[i]]++;
  }

  let left = 0,
    matches = 0;

  for (let right = 0; right < s.length; right++) {
    if (hashMap[s[right]] !== undefined) {
      hashMap[s[right]]--;
      if (hashMap[s[right]] === 0) matches++;
    }

    if ((right - left + 1) > p.length) {
      if (hashMap[s[left]] !== undefined) {
        if (hashMap[s[left]] === 0) matches--;
        hashMap[s[left]]++;
      }
      left++;
    }

    if (matches === Object.keys(hashMap).length) results.push(left);
  }

  return results;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));