/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const hashMap = {};
  items.forEach(([id, score]) => {
    if (!hashMap[id]) hashMap[id] = [];
    hashMap[id].push(score);
  });

  const result = [];

  for (let id in hashMap) {
    hashMap[id].sort((a, b) => b - a);
    let topFive = 0;
    topFive += hashMap[id][0];
    topFive += hashMap[id][1];
    topFive += hashMap[id][2];
    topFive += hashMap[id][3];
    topFive += hashMap[id][4];
    result.push([id, Math.floor(topFive / 5)]);
  }

  result.sort((a, b) => a[0] - b[0]);

  return result;
};

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]));
console.log(highFive([[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]));