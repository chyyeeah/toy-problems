const backspace_compare = function (str1, str2) {
  const stack1 = [],
    stack2 = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === '#') {
      stack1.pop();
    } else {
      stack1.push(str1[i]);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === '#') {
      stack2.pop();
    } else {
      stack2.push(str2[i]);
    }
  }

  if (stack1.length !== stack2.length) return false;

  for (let i = 0; i < stack1.length; i++) {
    if (stack1[i] !== stack2[i]) return false;
  }

  return true;
};

console.log(backspace_compare('xy#z', 'xzz#'));
console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xp#', 'xyz##'));
console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));