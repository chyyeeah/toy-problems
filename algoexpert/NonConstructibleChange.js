function nonConstructibleChange(coins) {
  const recurse = (n, pointer, sum) => {
    if (sum === n) {
      return true;
    }
    for (let i = pointer; i < coins.length; i++) {
      const coin = coins[i];
      if (recurse(n, i + 1, sum + coin)) {
        return true;
      }
    }
    return false;
  };
  let num = 1;
  while (recurse(num, 0, 0)) {
    num++;
  }
  return num;
}

let coins = [1,2,5];
console.log(nonConstructibleChange(coins));
coins = [5,7,1,1,2,3,22];
console.log(nonConstructibleChange(coins));