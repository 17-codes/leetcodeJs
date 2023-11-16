const letterCombinations = function (digits) {
  const keysObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result = [];
  function bactrack(i, currStr) {
    if (currStr.length === digits.length) {
      result.push(currStr);
      return;
    }
    for (let letter of keysObj[digits[i]]) {
      bactrack(i + 1, currStr + letter);
    }
  }
  if (digits) bactrack(0, "");
  return result;
};

let result = letterCombinations("234");
console.log(result);
