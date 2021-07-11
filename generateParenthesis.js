/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const generate = (open, close, collection) => {
    if (open >= n && close >= n) {
      result.push(collection);
      return;
    }
    if (open < n) {
      generate(open + 1, close, collection + '(');
    }

    if (close < open) {
      generate(open, close + 1, collection + ')');
    }
  };
  generate(0, 0, '');
  return result;
};

console.log(generateParenthesis(3));