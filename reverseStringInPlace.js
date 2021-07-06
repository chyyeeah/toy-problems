function reverse(arrayOfChars) {

  // Reverse the input array of characters in place

  const midpoint = Math.floor(arrayOfChars.length / 2);

  for (let i = 0; i < midpoint; i++) {
    const temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i];
    arrayOfChars[arrayOfChars.length - 1 - i] = temp;
  }
}

console.log('test 1')
let input = ['h', 'e', 'l', 'l', 'o'];
reverse(input);
let expected = ['o', 'l', 'l', 'e', 'h'];
let reversed = true;
for (let i = 0; i < expected.length; i++) {
  if (expected[i] !== input[i]) {
    reversed = false;
    break;
  }
}
console.log('correctly reversed', reversed);

console.log('test 2')
input = ['h'];
reverse(input);
expected = ['h'];
reversed = true;
for (let i = 0; i < expected.length; i++) {
  if (expected[i] !== input[i]) {
    reversed = false;
    break;
  }
}
console.log('correctly reversed', reversed);

console.log('test 3')
input = ['h', 'i'];
reverse(input);
expected = ['i', 'h'];
reversed = true;
for (let i = 0; i < expected.length; i++) {
  if (expected[i] !== input[i]) {
    reversed = false;
    break;
  }
}
console.log('correctly reversed', reversed);