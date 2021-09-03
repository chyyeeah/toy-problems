const find_word_concatenation = function (str, words) {
  const result_indices = [];
  let hashMap = {};

  words.forEach((word) => {
    if (!hashMap[word]) hashMap[word] = 0;
    hashMap[word]++;
  });

  let left = start = 0,
    right = 3,
    matches = 0
    altered = false;

  while (right <= str.length) {
    const word = str.substring(left, right);
    if (hashMap[word]) {
      hashMap[word]--;
      if (hashMap[word] === 0) matches++;
      left += 3;
      right += 3;
      altered = true;
    } else {
      start++;
      left = start;
      right = left + 3;
      matches = 0;
      hashMap = {};
      words.forEach((word) => {
        if (!hashMap[word]) hashMap[word] = 0;
        hashMap[word]++;
      });
    }

    if (matches === Object.keys(hashMap).length) {
      result_indices.push(start);
      start += 3;
      left = start;
      right = left + 3;
      matches = 0;
      words.forEach((word) => {
        if (!hashMap[word]) hashMap[word] = 0;
        hashMap[word]++;
      });
    }
  }

  return result_indices;
};

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));