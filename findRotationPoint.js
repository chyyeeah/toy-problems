const isBefore = (string1, string2) => {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz';

  let pointer1 = 0;
  let pointer2 = 0;

  while (string1[pointer1] === string2[pointer2]) {
    pointer1++;
    pointer2++;
  }

  if (pointer1 >= string1.length) return true;
  if (pointer2 >= string2.length) return false;

  if (dictionary.indexOf(string1[pointer1]) < dictionary.indexOf(string2[pointer2])) {
    return true;
  } else {
    return false;
  }
};

function findRotationPoint(words) {
  if (words.length < 1) throw new Error('error!');
  if (words.length === 1) return 0;

  const recurse = (start, end) => {
    if (start >= end) return end;

    const midpoint = Math.floor(start + ((end - start) / 2));
    const midpointString = words[midpoint];
    const endString = words[end];

    if (midpointString < endString) {
      end = recurse(start, midpoint);
    } else {
      end = recurse(midpoint + 1, end);
    }

    return end;
  };

  return recurse(0, words.length - 1);
}

console.log(findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']));
console.log(findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
'undulate', 'xenoepist', 'asymptote',
'babka', 'banoffee', 'engender',
'karpatka', 'othellolagkage']));