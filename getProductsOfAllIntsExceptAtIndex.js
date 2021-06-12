/** time: O(n^2), space: O(n) */
// function getProductsOfAllIntsExceptAtIndex(intArray) {

//   // Make a list of the products

//   if (intArray.length < 2) throw new Error('nothing is passed in!');

//   const multiplyAllButOne = (index, arr) => {
//     let result = 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (i !== index) result *= arr[i];
//     }

//     return result;
//   };

//   const result = [];

//   for (let i = 0; i < intArray.length; i++) {
//     result.push(multiplyAllButOne(i, intArray));
//   }

//   return result;
// }

/** time: O(n), space: O(3n) */
// function getProductsOfAllIntsExceptAtIndex(intArray) {
//   if (intArray.length < 2) throw new Error('nothing is passed in!');

//   const before = [];

//   for (let i = 0; i < intArray.length; i++) {
//     if (i === 0) {
//       before.push(1);
//     } else {
//       const currentPastProduct = intArray[i - 1] * before[i - 1];
//       before.push(currentPastProduct);
//     }
//   }

//   const after = [];

//   for (let i = intArray.length - 1; i >= 0; i--) {
//     if (i === intArray.length - 1) {
//       after.push(1);
//     } else {
//       const currentFutureProduct = intArray[i + 1] * after[intArray.length - i - 2];
//       after.push(currentFutureProduct);
//     }
//   }

//   const result = [];

//   for (let i = 0; i < intArray.length; i++) {
//     const beforePointer = i;
//     const afterPointer = intArray.length - 1 - i;
//     result.push(before[beforePointer] * after[afterPointer]);
//   }

//   return result;
// }

/** time: O(n), space: O(2n) */
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) throw new Error('nothing is passed in!');

  const result = [];

  for (let i = 0; i < intArray.length; i++) {
    if (i === 0) {
      result.push(1);
    } else {
      const currentPastProduct = intArray[i - 1] * result[i - 1];
      result.push(currentPastProduct);
    }
  }

  let after = 1;

  // for (let i = intArray.length - 1; i >= 0; i--) {
  //   result[i] = after * result[i];
  //   after *= intArray[i];
  // }

  for (let i = intArray.length - 1; i >= 0; i--) {
    if (i === intArray.length - 1) {
      result[i] = 1 * result[i];
    } else {
      after *= intArray[i + 1];
      result[i] = after * result[i];
    }
  }

  return result;
}

console.log(getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]));
// [ 120, 480, 240, 320, 960, 192 ]