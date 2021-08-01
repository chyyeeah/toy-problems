/**Recursive */
// const generate_valid_parentheses = function(num) {
//   const result = [];

//   const recursive = (open, close, str, arr) => {
//     if (open === 0 && close === 0) arr.push(str);

//     if (open > 0) {
//       recursive(open - 1, close, str + '(', arr);
//     }

//     if (open < close && close > 0) {
//       recursive(open, close - 1, str + ')', arr);
//     }
//   };
//   recursive(num, num, '', result);
//   return result;
// };

/**BFS */
const generate_valid_parentheses = function(num) {
  const result = [], queue = [['', num, num]];

  while (queue.length > 0) {
    const level = queue.length;
    for (let i = 0; i < level; i++) {
      const [str, opening, closing] = queue.shift();
      if (opening === 0 && closing === 0) result.push(str);
      if (opening > 0) {
        queue.push([str + '(', opening - 1, closing]);
      }
      if (opening < closing && closing > 0) {
        queue.push([str + ')', opening, closing - 1]);
      }
    }
  }

  return result;
};

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`)
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`)
