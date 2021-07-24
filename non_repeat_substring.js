const non_repeat_substring = function(str) {
  const charSet = new Set();
  let left = 0, count = 0, max = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    while (charSet.has(char)) {
      charSet.delete(str[left]);
      left++;
      count--;
    }
    charSet.add(char);
    count++;
    max = Math.max(max, count);
  }
  return max;
};

console.log(non_repeat_substring("aabccbb"));
console.log(non_repeat_substring("abbbb"));
console.log(non_repeat_substring("abccde"));