function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  const cache = {};

  for (let i = 0; i < theString.length; i++) {
    cache[theString[i]] = cache[theString[i]] || 0;
    cache[theString[i]]++;
  }

  const isEven = theString.length % 2 === 0;

  let foundMidpoint = false;
  for (let char in cache) {
    if (isEven) {
      if (cache[char] % 2 !== 0) return false;
    } else {
      if (cache[char] % 2 === 1) {
        if (foundMidpoint) return false;
        foundMidpoint = true;
      }
    }
  }

  return true;
}