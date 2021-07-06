function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[pointer1]) {
      pointer1++;
    } else if (servedOrders[i] === dineInOrders[pointer2]) {
      pointer2++;
    } else {
      return false;
    }
  }

  if (pointer1 !== takeOutOrders.length) return false;
  if (pointer2 !== dineInOrders.length) return false;

  return true;
}

let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
console.log(actual);