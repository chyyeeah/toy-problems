/*
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 */
function numPlayers(k, scores) {
  // sort the scores array in descending order

  // var to track number of players who have been ranked
  // starting at 0
  // var to track current rank
  // in the case of multiple players w/ the same rank
  // starting at 1

  // iterate over scores starting at index 1
  // if current score is not the same as prevScore
  // increment currentRank
  // update prevScore to current score
  // if current Rank is greater than k
  // return numPlayers
  // increment numPlayers by 1
  if (scores.length < 1) return 0;

  scores.sort((a, b) => b - a);

  if (scores[0] === 0) return 0;

  let numPlayers = 1,
    prevScore = scores[0],
    currentRank = 1;

  for (let i = 1; i < scores.length; i++) {
    const currentScore = scores[i];
    if (currentScore === 0) return numPlayers;
    numPlayers++;
    if (currentScore !== prevScore) {
      currentRank = numPlayers;
      prevScore = currentScore;
    }
    if (currentRank > k) return numPlayers - 1;
  }
  return numPlayers;
};