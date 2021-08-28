/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hash = new Array(26).fill(0);
  const base = 'a'.charCodeAt();

  for (let i = 0; i < s.length; i++) {
    hash[s[i].charCodeAt() - base]++;
    hash[t[i].charCodeAt() - base]--;
  }

  for (let i = 0; i < hash.length; i++) {
    if (hash[i] !== 0) return false;
  }

  return true;
};

// var isAnagram = function (s, t) {
//   const hashMap = {};

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (!hashMap[char]) hashMap[char] = 0;
//     hashMap[char]++;
//   }

//   let matches = 0;
//   for (let i = 0; i < t.length; i++) {
//     const char = t[i];
//     if (!hashMap[char]) return false;
//     hashMap[char]--;
//     if (hashMap[char] < 0) return false;
//     if (hashMap[char] === 0) matches++;
//   }

//   if (matches !== Object.keys(hashMap).length) return false;
//   return true;
// };

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));