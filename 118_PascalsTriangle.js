var generate = function (numRows) {
  const result = [];
  for (let i = 1; i <= numRows; i++) {
    let temp = [];
    temp[0] = 1;
    temp[i - 1] = 1;
    for (let j = 1; j < i - 1; j++) {
      if (i > 2) temp[j] = result[i - 2][j - 1] + result[i - 2][j];
    }
    result.push(temp);
  }
  return result;
};

const result = generate(6);
console.log(result);
