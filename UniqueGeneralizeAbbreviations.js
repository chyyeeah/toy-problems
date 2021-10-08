const next_abbr = (str) => {
  if (str.length < 1) return '1';
  const alpha = 'qwertyuiopasdfghjklzxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lastChar = str[str.length - 1]; // could be multiple digits

  if (alpha.indexOf(lastChar) < 0) {
    return str.substring(0, str.length - 1) + (parseInt(lastChar) + 1).toString();
  }
  return str + '1';
};

// console.log(next_abbr('hello'));
// console.log(next_abbr('hello1'));

const generate_generalized_abbreviation = function(word) {
  const result = [];

  const recurse = (str, i) => {
    if (i >= word.length) return result.push(str);

    recurse(next_abbr(str), i + 1);
    recurse(str + word[i], i + 1);
  };
  recurse('', 0);
  return result;
};


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("BAT")}`)
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation("code")}`)
