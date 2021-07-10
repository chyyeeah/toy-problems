/** Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits.length < 1) return [];

  const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  };
  const result = [];
  const generateCombos = (pos, string) => {
      if (pos >= digits.length) {
          result.push(string);
          return;
      }
      const currNumber = digits[pos];
      for (let i = 0; i < map[currNumber].length; i++) {
          const currChar = map[currNumber][i];
          generateCombos(pos + 1, string + currChar);
      }
  };
  generateCombos(0, '');
  return result;
};