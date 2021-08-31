/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashSet = new Set();
  nums.forEach((num) => hashSet.add(num));

  let max = 0;
  nums.forEach((num) => {
    if (!hashSet.has(num - 1)) {
      let counter = 0,
        tempNum = num;
      while (hashSet.has(tempNum)) {
        counter++;
        tempNum++;
      }
      max = Math.max(max, counter);
    }
  });
  return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([]));