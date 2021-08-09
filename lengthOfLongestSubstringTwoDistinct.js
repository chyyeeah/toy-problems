/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  const ht = {};
  let left = 0, max = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (!ht[char]) ht[char] = 0;
    ht[char]++;

    if (Object.keys(ht).length <= 2) {
      max = Math.max(max, right - left + 1);
    }

    while (Object.keys(ht).length > 2) {
      ht[s[left]]--;
      if (ht[s[left]] === 0) delete ht[s[left]];
      left++;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));
console.log(lengthOfLongestSubstringTwoDistinct("a"));

/**Mistakes
 * 18: Forgot .length when checking the number of keys inside ht
 * 19,20: Incorrectly accessed the key in ht. Had `left` instead of `s[left]`
 * 14: Should perform max check when keys are <= 2. Not only === 2.
 */