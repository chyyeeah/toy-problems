function tournamentWinner(competitions, results) {
  let leader, topScore = 0;
  const scores = {};
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    let winner;
    if (result === 0) {
      winner = competitions[i][1];
      if (!scores[winner]) scores[winner] = 0;
      scores[winner] += 3;
    } else {
      winner = competitions[i][0];
      if (!scores[winner]) scores[winner] = 0;
      scores[winner] += 3;
    }
    if (scores[winner] > topScore ){
      topScore = scores[winner];
      leader = winner;
    }
  }
  return leader;
}

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0,0,1];

console.log(tournamentWinner(competitions, results));