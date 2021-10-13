function groupAnagrams(words) {
  const hashMap = {};
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  words.forEach(word => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      sum += alphabet.indexOf(c);
    }
    let key = `${sum.toString()},${word.length.toString()}`;
    if (!hashMap[key]) hashMap[key] = [];
    hashMap[key].push(word);
  });
  return Object.values(hashMap);
}