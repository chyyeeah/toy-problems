const circular_array_loop_exists = function (arr) {
  let slow = 0,
    fast = 0,
    started = false;

  let counter = 0;

  while (!started || (slow % arr.length) !== (fast % arr.length)) {
    if (!started) started = true;

    slow += arr[slow % arr.length];
    fast += arr[fast % arr.length];
    fast += arr[fast % arr.length];
    counter++;
  }

  if (fast >= arr.length) return true;

  return false;
};



console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)
