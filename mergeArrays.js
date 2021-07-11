function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  const result = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < myArray.length && pointer2 < alicesArray.length) {
    if (myArray[pointer1] < alicesArray[pointer2]) {
      result.push(myArray[pointer1]);
      pointer1++;
    } else {
      result.push(alicesArray[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < myArray.length) {
    result.push(myArray[pointer1]);
    pointer1++;
  }

  while (pointer2 < alicesArray.length) {
    result.push(alicesArray[pointer2]);
    pointer2++;
  }

  return result;
}

actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
console.log(actual);