function isMatch(text, pattern) {
  let tIdx = pIdx = 0;

  while (tIdx < text.length || pIdx < pattern.length) {
    const lookahead = pattern[pIdx + 1],
      t = text[tIdx],
      p = pattern[pIdx];

    if (tIdx < text.length && pIdx >= pattern.length) return false;
    if (tIdx >= text.length && lookahead !== '*') return false;

    if (lookahead === '*') {
      if (p === '.') {
        const nextChar = pattern[pIdx + 2];
        if (nextChar) {
          const anchor = pIdx + 2;
          for (let i = tIdx; i < text.length; i++) {
            if (text[i] === nextChar) {
              if (
                isMatch(
                  text.substring(i, text.length),
                  pattern.substring(anchor, pattern.length)
                )
              ) {
                return true;
              }
            }
          }
          return false;
        } else {
          return true;
        }
      } else {
        while (text[tIdx] === p) {
          tIdx++;
        }
      }
      pIdx += 2;
    } else if (p === '.') {
      tIdx++;
      pIdx++;
    } else if (t !== p) {
      return false;
    } else {
      tIdx++;
      pIdx++;
    }
  }

  return true;
};

console.log(isMatch('', 'a'));
console.log(isMatch('a', ''));
console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'aa'));
console.log(isMatch('abc', 'a.c'));
console.log(isMatch('abbb', 'ab*'));
console.log(isMatch('acd', 'ab*c.'));
console.log(isMatch('ab', 'abc*'));
console.log(isMatch('abbbbba','a.*c'));
console.log(isMatch('abbcdasdfbcd','a.*cd'));