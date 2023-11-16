//rotate in-place
var rotate2 = function (matrix) {
  let t = 0;
  let l = 0;
  let r = matrix.length - 1;
  while (l < r) {
    let cond = r - l;
    for (let i = 0; i < cond; i++) {
      let top = l;
      let bottom = r;
      t = matrix[top][l + i];
      matrix[top][l + i] = matrix[bottom - i][l];
      matrix[bottom - i][l] = matrix[bottom][r - i];
      matrix[bottom][r - i] = matrix[top + i][r];
      matrix[top + i][r] = t;
      l++;
    }
    r--;
  }
};

var rotate1 = function (matrix) {
  let l = 0;
  let r = matrix.length - 1;
  while (l < r) {
    let top = l;
    let bottom = r;
    for (let i = 0; i < r - top; ++i) {
      let t = matrix[top][l];
      matrix[top][l] = matrix[bottom - i][l - i];
      matrix[bottom - i][l - i] = matrix[bottom][r - i];
      matrix[bottom][r - i] = matrix[top + i][r];
      matrix[top + i][r] = t;
      l++;
    }
    l = top + 1;
    r--;
  }
};
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
let mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate1(matrix);
console.log(matrix);
