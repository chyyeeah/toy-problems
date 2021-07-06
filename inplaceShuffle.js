function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  let pointer = 0;

  while (pointer < array.length) {
    const randomIndex = getRandom(pointer, array.length - 1);
    const temp = array[pointer];
    array[pointer] = array[randomIndex];
    array[randomIndex] = temp;
    pointer++;
  }
}

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);