function sortScores(unorderedScores, highestPossibleScore) {
  if (unorderedScores.length < 2) return unorderedScores;
  // Sort the scores in O(n) time
  const scoreCounts = [];
  let currentHighScore = 0;

  unorderedScores.forEach(score => {
    score > currentHighScore ? currentHighScore = score : null;
    scoreCounts[score] = scoreCounts[score] || 0;
    scoreCounts[score]++;
  });

  const sortedScores = [];

  for (let i = currentHighScore; i >= 0; i--) {
    if (scoreCounts[i]) {
      let count = scoreCounts[i];
      while (count > 0) {
        sortedScores.push(i);
        count--;
      }
    }
  }

  return sortedScores;
}

console.log(sortScores([55], 100));