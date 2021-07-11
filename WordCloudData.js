const isLetter = l => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(l) > -1;
const isValidChar = c => '\''.indexOf(c) > -1;

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {

    // Count the frequency of each word
    let start = 0;
    let end = 0;

    while (end < inputString.length) {
      while (end < inputString.length && (isLetter(inputString[end]) || isValidChar(inputString[end]))) {
        end++;
      }
      const word = inputString.substring(start, end);
      const prevCount = this.wordsToCounts.get(word);
      if (prevCount) {
        this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
      } else {
        this.wordsToCounts.set(word, 1);
      }

      // bump forward for invalid chars and spaces
      while (end < inputString.length && !(isLetter(inputString[end]) || isValidChar(inputString[end]))) {
        end++;
      }
      start = end;
    }
    console.log(this.wordsToCounts);
  }
}