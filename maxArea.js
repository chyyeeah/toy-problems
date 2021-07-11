/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0,
      right = height.length - 1,
      maxVolume = 0;

  while (left < right) {
      let volume;
      if (height[left] < height[right]) {
          const volume = height[left] * (right - left);
          if (volume > maxVolume) {
              maxVolume = volume;
          }
          left++;
      } else {
          const volume = height[right] * (right - left);
          if (volume > maxVolume) {
              maxVolume = volume;
          }
          right--;
      }
  }
  return maxVolume;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height) === 49);
height = [1,1];
console.log(maxArea(height) === 1);
height = [4,3,2,1,4];
console.log(maxArea(height) === 16);
height = [1,2,1];
console.log(maxArea(height) === 2);