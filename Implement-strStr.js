/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // if needle is an empty string, return 0
  if (needle.length < 1) return 0;
  // if haystack is an empty string, return -1
  if (haystack.length < 1) return -1;
  // if length of needle is greater than haystack, return -1
  if (needle.length > haystack.length) return -1;

  // initialize a pointer to 0
  var pointer1 = 0;
  // define a found boolean
  var found = false;

  // iterate over haystack
  // while pointer < (length of haystack - length of needle) and found is false
  while (pointer1 <= (haystack.length - needle.length) && !found) {
    // initialize second pointer to 0
    var pointer2 = 0;
    // while char at position (pointer1 + pointer2) for haystack and needle are equal and found is false
    while (haystack[pointer1 + pointer2] === needle[pointer2] && !found) {
      // if pointer2 equal needle.length - 1
        // set found to true
      if (pointer2 === needle.length - 1) found = true;
      // increment pointer2
      pointer2++;
    }
    // if found is false
      // increment pointer
    if (!found) pointer1++;
  }

  // if found, return pointer
  // else, return -1
  if (found) {
    return pointer1;
  } else {
    return -1;
  }
};