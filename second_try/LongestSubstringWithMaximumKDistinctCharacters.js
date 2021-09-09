const longest_substring_with_k_distinct = function (str, k) {
  const freq = {};
  let max = left = count = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (!freq[char]) freq[char] = 0;
    freq[char]++;
    count++;

    while (Object.keys(freq).length > k) {
      freq[str[left]]--;
      count--;
      if (freq[str[left]] < 1) delete freq[str[left]];
      left++;
    }

    max = Math.max(max, count);
  }

  return max;
};

console.log(longest_substring_with_k_distinct('araaci', 2));
console.log(longest_substring_with_k_distinct('araaci', 1));
console.log(longest_substring_with_k_distinct('cbbebi', 3));
console.log(longest_substring_with_k_distinct('cbbebi', 10));