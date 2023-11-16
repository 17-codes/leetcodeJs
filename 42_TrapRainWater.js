let height = [0, 2, 0];
var trap = function (height) {
  let res = 0;
  const maxLeft = [];
  const maxRight = [];
  let m = height[0];
  for (let i = 0; i < height.length; i++) {
    if (m < height[i - 1]) {
      m = height[i - 1];
    }
    maxLeft.push(m);
  }
  m = height[height.length - 1];
  for (let i = height.length - 1; i >= 0; i--) {
    if (m < height[i + 1]) {
      m = height[i + 1];
    }
    maxRight.unshift(m);
  }
  console.log(maxLeft, maxRight);

  let t = 0;
  for (let i = 0; i < height.length; i++) {
    t = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (t > 0) res += t;
  }
  return res;
};

let res = trap(height);
console.log(res);
