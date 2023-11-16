const lengthOfLongestSubstring = (str) => {
  let temp = "";
  let count = 0;
  if (str.length < 2) {
    return str.length;
  }
  let i = 0;
  let j = 1;
  temp += str[i];
  while (j < str.length) {
    if (temp.includes(str[j])) {
      i = j;
      while (str[i - 1] !== str[j]) {
        i--;
      }
      temp = str[i];
      j = i;
    } else temp += str[j];
    j++;
    count = temp.length > count ? temp.length : count;
  }
  return count;
};

const str = "aa";

const result = lengthOfLongestSubstring(str);
console.log(result);
