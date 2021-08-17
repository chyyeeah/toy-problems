// const isStrobo = (str) => {
//   // 0:0, 1:1, 6:9, 8:8:, 9:6
//   // check if palidrome
//   // middle can't be 6 or 9

//   const valid = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' },
//     mid = Math.floor(str.length / 2);

//   for (let i = 0; i < mid; i++) {
//     const left = str[i],
//       right = str[str.length - 1 - i];

//     if (!valid[left]) return false;
//     if (valid[left] !== right) return false;
//   }

//   if (str.length % 2 === 1 && ['0', '1', '8'].indexOf(str[mid]) < 0) {
//     return false;
//   }

//   return true;
// };

// console.log(isStrobo('69'));
// console.log(isStrobo('96'));
// console.log(isStrobo('121'));
// console.log(isStrobo('619'));

/**
 * @param {number} n
 * @return {string[]}
 */
// var findStrobogrammatic = function (n) {
//   const result = [], valid = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6 ' };
//   let str = '1';
//   for (let i = 1; i < n; i++) {
//     str += 0;
//   }

//   while (str.length === n) {
//     if (valid[str[0]] && isStrobo(str)) {
//       result.push(str);
//     }

//     str = `${parseInt(str) + 1}`;
//   }

//   if (n === 1) result.push('0');

//   return result;
// };

/**
 * @param {number} n
 * @return {string[]}
 */
// var findStrobogrammatic = function (n) {
//   const valid = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' },
//     mid = Math.floor((n - 1) / 2),
//     result = [];

//   if (n === 1) result.push('0');

//   const recurse = (idx, str) => {
//     if (str[0] === '0') return;
//     if (idx >= n) return result.push(str);

//     if (idx < mid) {
//       const keys = Object.keys(valid);
//       for (let i = 0; i < keys.length; i++) {
//         recurse(idx + 1, str + keys[i]);
//       }
//     } else if (idx === mid) {
//       if (n % 2 === 0) {
//         const keys = Object.keys(valid);
//         for (let i = 0; i < keys.length; i++) {
//           recurse(idx + 1, str + keys[i]);
//         }
//       } else {
//         const middleKeys = ['0', '1', '8'];
//         for (let i = 0; i < middleKeys.length; i++) {
//           recurse(idx + 1, str + middleKeys[i]);
//         }
//       }
//     } else {
//       let complement;
//       if (n % 2 === 0) {
//         complement = str[mid + 1 - (idx - mid)];
//       } else {
//         complement = str[mid - (idx - mid)];
//       }
//       recurse(idx + 1, str + valid[complement]);
//     }
//   };

//   recurse(0, '');
//   return result;
// }

const complements = [['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']];
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  const recurse = (n, length) => {
    if (n === 0) return [''];
    if (n === 1) return ['0', '1', '8'];

    middles = recurse(n - 2, length);

    const result = [];
    for (let i = 0; i < middles.length; i++) {
      const middle = middles[i];

      if (middle.length !== length - 2) result.push('0' + middle + '0');
      result.push('1' + middle + '1');
      result.push('6' + middle + '9');
      result.push('8' + middle + '8');
      result.push('9' + middle + '6');
    }
    return result;
  }
  return recurse(n, n);
};

// console.log(findStrobogrammatic(1));
// console.log(findStrobogrammatic(2));
// console.log(findStrobogrammatic(3));
console.log(findStrobogrammatic(4));