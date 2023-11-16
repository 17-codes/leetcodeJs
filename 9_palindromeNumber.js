function palindromeNumber(value) {
  if (Math.sign(value) === -1) return false;

  let num = value;
  let sum = 0;
  let remainder = 0;
  while (num > 0) {
    remainder = num % 10;
    sum = 10 * sum + remainder;
    num = Math.floor(num / 10);
  }

  return sum === value;
}

const p = palindromeNumber(10);
console.log(p);
