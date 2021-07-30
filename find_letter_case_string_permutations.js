// const find_letter_case_string_permutations = function(str) {
//   const permutations = [str],
//     alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let mutatedStr = str;

//   for (let right = 0; right < mutatedStr.length; right++) {
//     if (alphabet.indexOf(mutatedStr[right]) > -1) {
//       for (let left = right; left >= 0; left--) {
//         if (alphabet.indexOf(mutatedStr[left]) > -1) {
//           const replacement = mutatedStr[left].toUpperCase();
//           mutatedStr = mutatedStr.substr(0, left) + replacement + mutatedStr.substr(left + 1, mutatedStr.length);
//           permutations.push(mutatedStr);
//         }
//       }
//       mutatedStr = str;
//     }
//   }
//   return permutations;
// };

const find_letter_case_string_permutations = function(str) {
  const queue = [str],
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let pointer = 0;

  while (pointer < str.length) {
    const char = str[pointer];
    if (alphabet.indexOf(char) > -1) {
      let l = queue.length;
      for (let i = 0; i < l; i++) {
        const perm = queue[i];
        let modString = '';
        modString += perm.slice(0, pointer);
        modString += perm[pointer].toUpperCase();
        modString += perm.slice(pointer + 1, perm.length);
        queue.push(modString);
      }
    }
    pointer++;
  }

  return queue;
};

console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
