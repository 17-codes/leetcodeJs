// var findSubstring = function (s, words) {
// let len = words[0].length * words.length;
// let res = [];
// for (let i = 0; i < s.length; i++) {
//   if (i + len - 1 > s.length) {
//     break;
//   }
//   let count = 0;
//   let currentString = s.slice(i, i + len);
//   let temp = [...words];
//   for (let j = 0; j < words.length; j++) {
//     let wIdx = temp.indexOf(
//       currentString.slice(
//         j * words[0].length,
//         j * words[0].length + words[0].length
//       )
//     );
//     if (wIdx >= 0) {
//       temp[wIdx] = null;
//       count += words[0].length;
//     }
//   }
//   if (count === len) {
//     res.push(i);
//   }
// }
// return res;
// };

var findSubstring = function (s, words) {
  let len = words[0].length * words.length;
  let wordLen = words[0].length;
  let res = [];
  let i = 0;
  let j = i + len;
  while (j < s.length) {
    let wordSplit = s.slice(0, j).match(/.{1,2}/g);
    let c = 0;
    for (let i = 0; i < words.length; i++) {
      let idx = wordSplit.indexOf(words[i]);

      console.log(idx);
      if (idx < 0) {
        break;
      }
      c += 1;
      wordSplit[idx] = "";
    }
    if (c === words.length) res.push(i);
    i++;
    j++;
  }

  return res;
};

let s = "ababaab";
let words = ["ab", "ba", "ba"];

let res = findSubstring(s, words);
console.log(res);
