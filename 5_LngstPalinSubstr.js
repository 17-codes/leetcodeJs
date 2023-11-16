const longestPalindrome = (str) => {
  if (str.length < 2) return str;
  let temp = "";
  let revTemp = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      revTemp = str[j] + revTemp;
      if (revTemp === temp) {
        result = result.length < temp.length ? temp : result;
      }
    }
    temp = "";
    revTemp = "";
  }
  return result;
};

const str = "bb";

const result = longestPalindrome(str);
console.log(result);
