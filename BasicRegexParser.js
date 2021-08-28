function isMatch(text, pattern) {
  let t = p = 0;

  while (p < pattern.length) {
    if (t >= text.length) return false;

    const pChar = pattern[p];
    if (pChar === '.') {
      t++;
      p++;
      continue;
    }

    const lookAhead = pattern[p + 1];
    if (lookAhead === '*') {
      while (text[t] === pChar && t < text.length) {
        t++;
      }
      p++;
    } else {
      const tChar = text[t];
      if (tChar !== pChar) return false;
      t++;
    }
    p++;
  }
  if (t < text.length) return false;
  return true;
};

console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'aa'));
console.log(isMatch('abc', 'a.c'));
console.log(isMatch('abbb', 'ab*'));
console.log(isMatch('acd', 'ab*c.'));

/*
  Learning moments:
  - remember to skip past the '*' after confirming that it exists after the current char
  - remember to always create a boundary for while loop (ex. line #16 `t < text.length`)
*/