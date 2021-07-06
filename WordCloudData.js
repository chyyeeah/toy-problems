// const isLetter = l => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(l) > -1;
// const isValidChar = c => '\''.indexOf(c) > -1;

// class WordCloudData {
//   constructor(inputString) {
//     this.wordsToCounts = new Map();
//     this.populateWordsToCounts(inputString);
//   }

//   populateWordsToCounts(inputString) {

//     // Count the frequency of each word
//     let start = 0;
//     let end = 0;

//     while (end < inputString.length) {
//       while (end < inputString.length && (isLetter(inputString[end]) || isValidChar(inputString[end]))) {
//         end++;
//       }
//       const word = inputString.substring(start, end);
//       const prevCount = this.wordsToCounts.get(word);
//       if (prevCount) {
//         this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
//       } else {
//         this.wordsToCounts.set(word, 1);
//       }

//       // bump forward for invalid chars and spaces
//       while (end < inputString.length && !(isLetter(inputString[end]) || isValidChar(inputString[end]))) {
//         end++;
//       }
//       start = end;
//     }
//     console.log(this.wordsToCounts);
//   }
// }

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const breakpoints = '.,:!? ';
    const connectors = '-';
    let collection = '';
    // iterate over the string
      // if current char is in the breakpoints
        // continue
      // add char to collection string
      // if the next char is in the breakpoints arr OR undefined
        // if collection doesn't exist in map
          // add to map
        // else
          // if the collection matches exactly what is in map
            // increment the count
          // else
            // add the collection with the similar collection count + 1
            // delete similar collection
        // reset collection
    const store = new Map();
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (breakpoints.indexOf(char) > -1) continue;
      if (
        connectors.indexOf(char) > -1 &&
        (breakpoints.indexOf(inputString[i - 1]) > -1 || breakpoints.indexOf(inputString[i + 1]) > -1)
      ) {
        continue;
      }

      collection += char;
      const nextChar = inputString[i + 1];
      if (breakpoints.indexOf(nextChar) > -1 || !nextChar) {
        if (!store.has(collection.toLowerCase())) {
          store.set(collection.toLowerCase(), {
            rawWord: collection,
            count: 1
          });
        } else {
          const mapObject = store.get(collection.toLowerCase());
          mapObject.count++;
          if (collection !== mapObject.rawWord) {
            mapObject.rawWord = collection;
          }
          store.set(collection.toLowerCase(), mapObject);
        }
        collection = '';
      }
    }

    store.forEach((value, key) => {
      if (key !== value.rawWord) {
        this.wordsToCounts.set(value.rawWord, value.count);
        this.wordsToCounts.delete(key);
      } else {
        this.wordsToCounts.set(key, value.count);
      }
    });
  }
}