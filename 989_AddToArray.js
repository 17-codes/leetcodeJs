const addToArrayForm = function (num, k) {
  let i = num.length - 1;
  let c = 0;
  let numToAdd = k;
  let result = [...num];
  while (i >= 0) {
    result[i] = result[i] + (numToAdd % 10) + c;
    numToAdd = Math.floor(numToAdd / 10);

    if (result[i] > 9) {
      result[i] = result[i] % 10;
      c = 1;
    } else c = 0;
    if (i === 0 && c > 0 && numToAdd <= 0) {
      result.unshift(c);
    }
    i--;
  }
  while (numToAdd > 0) {
    console.log("in");
    if ((numToAdd % 10) + c > 9) {
      let temp = c + (numToAdd % 10);
      result.unshift(temp % 10);
      c = 1;
    } else {
      result.unshift(c + (numToAdd % 10));
      c = 0;
    }

    numToAdd = Math.floor(numToAdd / 10);
  }
  if (c > 0) result.unshift(c);
  return result;
};

const addToArrayForm1 = (A, K) => {
  let flag = A.length - 1;
  while (K) {
    if (flag < 0) {
      A.unshift(K % 10);
    } else {
      K += A[flag];
      A[flag--] = K % 10;
    }
    K = Math.floor(K / 10);
  }
  return A;
};
const a = [0];
const k = 806;

const result = addToArrayForm1(a, k);
console.log(result);
