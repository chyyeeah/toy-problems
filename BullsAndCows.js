/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0,
    leftoverSecret = '',
    leftoverGuess = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      leftoverSecret += secret[i];
      if (!leftoverGuess[guess[i]]) leftoverGuess[guess[i]] = 0;
      leftoverGuess[guess[i]]++;
    }
  }

  let cows = 0;
  for (let i = 0; i < leftoverSecret.length; i++) {
    if (leftoverGuess[leftoverSecret[i]]) {
      cows++;
      leftoverGuess[leftoverSecret[i]]--;
      if (leftoverGuess[leftoverSecret[i]] < 1) delete leftoverGuess[leftoverSecret[i]];
    }
  }

  return `${bulls}A${cows}B`;
};