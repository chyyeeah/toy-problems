/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hashSet = new Set();
  nums.forEach((num) => {
    if (hashSet.has(num)) {
      hashSet.delete(num);
    } else {
      hashSet.add(num);
    }
  });

  return hashSet.values().next().value;
};

console.log(singleNumber([2,2,1]));