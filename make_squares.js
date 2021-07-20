// const make_squares = function(arr) {
//   if (arr[0] >= 0) return arr.map(num => num ** 2);
//   const squares = [];

//   if (arr[arr.length < 0]) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       const square = arr[i] ** 2;
//       squares.push(square);
//     }
//     return squares;
//   }

//   // determine where the split between negative and positive is
//   let left, right;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       left = i - 1;
//       right = i + 1;
//       squares.push(0);
//       break;
//     }

//     if (arr[i - 1] < 0 && arr[i] > 0) {
//       left = i - 1;
//       right = i;
//       break;
//     }
//   }
//   console.log(arr.length);
//   // have 2 pointers propogate outward determine which square is less
//   while (left >= 0 || right < arr.length) {
//     console.log(left, right);
//     if (left < 0) {
//       squares.push(arr[right] ** 2);
//       right++;
//     } else if (right >= arr.length) {
//       squares.push(arr[left] ** 2);
//       left--;
//     } else {
//       const leftSquare = arr[left] ** 2;
//       const rightSquare = arr[right] ** 2;
//       if (leftSquare < rightSquare) {
//         squares.push(leftSquare);
//         left--;
//       } else {
//         squares.push(rightSquare);
//         right++;
//       }
//     }

//   }

//   return squares;
// };

const make_squares = function(arr) {
  const squares = [];
  let left = 0,
    right = pointer = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] ** 2;
    const rightSquare = arr[right] ** 2;
    if (leftSquare > rightSquare) {
      squares[pointer] = leftSquare;
      pointer--;
      left++;
    } else {
      squares[pointer] = rightSquare;
      pointer--;
      right--;
    }
  }
  return squares;
};

console.log(make_squares([-2, -1, 0, 2, 3]));
console.log(make_squares([-3, -1, 0, 1, 2]));
