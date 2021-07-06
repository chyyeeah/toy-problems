function reverseWords(message) {

  // Decode the message by reversing the words

  // reverse the entire message array
  const midpoint = Math.floor(message.length / 2)
  for (let i = 0; i < midpoint; i++) {
    const temp = message[message.length - 1 - i];
    message[message.length - 1 - i] = message[i];
    message[i] = temp;
  }

  // reverse each word
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < message.length) {
    while (message[pointer2] !== ' ' && pointer2 < message.length) {
      pointer2++;
    }
    const tempPointer = pointer2 + 1;
    pointer2--;

    while (pointer1 < pointer2) {
      const tempChar = message[pointer1];
      message[pointer1] = message[pointer2];
      message[pointer2] = tempChar;
      pointer1++;
      pointer2--;
    }

    pointer1 = pointer2 = tempPointer;
  }
}
// [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd']
// [ 'd', 'n', 'u', 'o', 'p', ' ', 'e', 'k', 'a', 'c']
// pointer1: 6
// pointer2: 6


const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

reverseWords(message);
console.log(message);
console.log(message.join('') === 'steal pound cake');