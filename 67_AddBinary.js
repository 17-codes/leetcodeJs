//1+1=0 c=1
// 0+0=0 c=0
// 1+0=1 c=0
// 0+1=1 c0

function addBinary(a, b) {
  if (a.length > b.length) {
    return addBin(a, b);
  } else {
    return addBin(b, a);
  }
}

function addBin(n1, n2) {
  let c = 0;
  let res = "";
  let num1Index = n1.length - 1;

  for (let i = n2.length - 1; i >= 0; i--) {
    let temp = num1Index - (n2.length - 1 - i);
    if (n2[i] * 1 + n1[temp] * 1 + c === 2) {
      res = 0 + res;
      c = 1;
    } else if (n2[i] * 1 + n1[temp] * 1 + c === 3) {
      res = 1 + res;
      c = 1;
    } else if (n2[i] * 1 + n1[temp] * 1 + c === 0) {
      res = 0 + res;
      c = 0;
    } else {
      res = 1 + res;
      c = 0;
    }
  }

  for (let i = n1.length - n2.length - 1; i >= 0; i--) {
    if (n1[i] * 1 + c === 2) {
      res = 0 + res;
      c = 1;
    } else if (n1[i] * 1 + c === 0) {
      res = 0 + res;
      c = 0;
    } else {
      res = 1 + res;
      c = 0;
    }
  }
  if (c === 1) return c + res;
  return res;
}

const addBinary2 = function (a, b) {
  let carry = 0;
  let result = "";

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = digitA + digitB + carry;

    const currentBit = sum % 2;
    carry = Math.floor(sum / 2);

    result = currentBit + result;

    i--;
    j--;
  }

  return result;
};

console.log(addBinary2("100", "110010"));
