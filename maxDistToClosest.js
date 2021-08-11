/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let max = 0;

  if (!seats[0]) {
    let p = 0;
    while (!seats[p]) {
      max++;
      p++;
    }
  }

  if (!seats[seats.length - 1]) {
    let p = seats.length - 1,
      counter = 0;
    while (!seats[p]) {
      counter++;
      p--;
    }
    max = Math.max(max, counter);
  }

  for (let i = 0; i < seats.length; i++) {
    if (seats[i]) {
      let counter = 1,
        p = i + 1;

      while (!seats[p] && p < seats.length) {
        p++;
        counter++;
      }

      if (p < seats.length) {
        const mid = Math.floor((p + i) / 2),
          tempMax = Math.min(mid - i, p - mid);
        max = Math.max(max, tempMax);
      }

      i = --p;
    }
  }
  return max;
};

console.log(maxDistToClosest([1,0,0,0,1,0,1]));
console.log(maxDistToClosest([1,0,0,0]));
console.log(maxDistToClosest([0,1]));
console.log(maxDistToClosest([1,0]));
console.log(maxDistToClosest([1,0,0,0,1,0,1,0,0,0,0]));
console.log(maxDistToClosest([1,0,0,1]));
console.log(maxDistToClosest([1,1,0,1,1]));