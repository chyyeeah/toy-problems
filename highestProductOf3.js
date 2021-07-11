// function highestProductOf3(arrayOfInts) {
//   if (arrayOfInts.length < 3) throw new Error('error!');

//   // Calculate the highest product of three numbers
//   const topThree = [ arrayOfInts[0], arrayOfInts[1], arrayOfInts[2] ];
//   topThree.sort((a, b) => a - b);

//   for (let i = 3; i < arrayOfInts.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (arrayOfInts[i] > topThree[j]) {
//         topThree[j] = arrayOfInts[i];
//         topThree.sort((a, b) => a - b);
//         break;
//       }
//     }
//   }

//   return topThree[0] * topThree[1] * topThree[2];
// };

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error('error!');

  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
      );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);

    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
};