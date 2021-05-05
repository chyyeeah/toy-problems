/**
 * @param {string} s
 * @return {string}
 */
/*
Runtime: 100 ms, faster than 91.45% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 43.7 MB, less than 54.25% of JavaScript online submissions for Longest Palindromic Substring.
*/
var longestPalindrome = function(s) {
  var cache = {};
  var longest = 0;
  var result;

  for (var i = 0; i < s.length - 1; i++) {
    if (s[i - 1] === s[i + 1]) {
      cache[i - 1] = {
        startIndex: i - 1,
        endIndex: i + 1
      }
    } else if (s[i + 1] === s[i]) {
      var sameChar = s[i];
      var originIndex = i;
      var counter = 2;
      i+=2;

      while (s[i] === sameChar) {
        i++;
        counter++;
      }
      i--;

      cache[originIndex] = {
        startIndex: originIndex,
        endIndex: i
      }
    }
  }

  Object.values(cache).forEach(function(substring) {
    var leftIndex = substring.startIndex - 1;
    var rightIndex = substring.endIndex + 1;

    var validRange = rightIndex < s.length && leftIndex > -1;
    var charsAreValid = s[leftIndex] && s[rightIndex];
    var charsAreEqual = s[leftIndex] === s[rightIndex];

    while (validRange && charsAreValid && charsAreEqual) {
      substring.startIndex = leftIndex;
      substring.endIndex = rightIndex;

      leftIndex = leftIndex - 1;
      rightIndex = rightIndex + 1;
      validRange = rightIndex < s.length && leftIndex > -1;
      charsAreValid = s[leftIndex] && s[rightIndex];
      charsAreEqual = s[leftIndex] === s[rightIndex];
    }

    var substringLength = substring.endIndex - substring.startIndex + 1

    if (substringLength > longest) {
      longest = substringLength;
      result = substring;
    }
  });

  if (longest === 0) {
    return s[0];
  } else {
    return s.substring(result.startIndex, result.endIndex + 1);
  }
};

console.log(longestPalindrome("babad") === 'bab');
console.log(longestPalindrome("cbbd") === 'bb');
console.log(longestPalindrome("a") === 'a');
console.log(longestPalindrome("ac") === 'a');
console.log(longestPalindrome("ii") === 'ii');
console.log(longestPalindrome("aaaa") === 'aaaa');
console.log(longestPalindrome("eaaaa") === 'aaaa');
console.log(longestPalindrome("eaaaae") === 'eaaaae');