/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const result = [];
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];

    if (
      result.length > 0 &&
      result[result.length - 1] > 0 &&
      asteroid < 0
    ) {
      while (
        result.length > 0 &&
        result[result.length - 1] > 0 &&
        asteroid < 0
      ) {
        const popped = result.pop(),
          sum = popped + asteroid;
        if (sum > 0) {
          result.push(popped);
          break;
        } else if (sum === 0) {
          break;
        } else if (result.length < 1 || result[result.length - 1] < 0) {
          result.push(asteroid);
        }
      }
    } else {
      result.push(asteroid);
    }
  }
  return result;
};

// console.log(asteroidCollision([5,10,-5]));
// console.log(asteroidCollision([-2,-1,1,2]));
// console.log(asteroidCollision([8,-8]));
// console.log(asteroidCollision([10,2,-5]));
// console.log(asteroidCollision([-2,-2,1,-2]));
console.log(asteroidCollision([1, -2, -2, -2]));
