// const maxArea = function (height) {
//   let end = height.length - 1;
//   let area = 0;
//   for (let j = end; j >= 0; j--) {
//     for (let i = 0; i < height.length - 1; i++) {
//       let r = 0;
//       r = Math.min(height[i], height[j]) * (j - i);
//       if (r > area) {
//         area = r;
//       }
//     }
//   }

//   return area;
// };

const maxArea = function (height) {
  let area = 0;
  let l = 0;
  let r = height.length - 1;
  let result = 0;
  while (l < r) {
    area = (r - l) * Math.min(height[l], height[r]);
    result = Math.max(result, area);
    if (height[l] < height[r]) l += 1;
    else r -= 1;
  }
  return result;
};
let height = [1, 8, 6, 8, 5, 4, 15, 3, 7];
//[1,8,6,2,5,4,8,3,7]=49
//[1,2,1] =2
// [1,1]=1
//[1,2,4,3] =4
const result = maxArea(height);
console.log(result);
