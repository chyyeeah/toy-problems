const length_of_longest_substring = function(str, k) {
  let left = 0, currentMaxCharCount = 0, maxSubstring = 0;
  const hashMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!hashMap[char]) hashMap[char] = 0;
    hashMap[char]++;
    currentMaxCharCount = Math.max(currentMaxCharCount, hashMap[char]);

    while ((i - left + 1 - currentMaxCharCount) > k) {
      hashMap[str[left]]--;
      left++;
    }
    maxSubString = Math.max(maxSubstring, i - left + 1);
  }
  return maxSubString;
};

console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));