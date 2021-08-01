const find_word_concatenation = function(str, words) {
  result_indices = [];
  // TODO: Write your code here
  const freq = new Map();

  words.forEach(word => {
    if (!freq.has(word)) freq.set(word, 0);
    freq.set(word, freq.get(word) + 1);
  });



  return result_indices;
};