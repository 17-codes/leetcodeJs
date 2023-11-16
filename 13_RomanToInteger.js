function romanToInteger(s) {
  const romanChar = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanChar[s[i]] < romanChar[s[i + 1]]) {
      result -= romanChar[s[i]];
    } else {
      result += romanChar[s[i]];
    }
  }

  return result;
}

const romToInt = romanToInteger("MCMXCIV");
console.log(romToInt);
