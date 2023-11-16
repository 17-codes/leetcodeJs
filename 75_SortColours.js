var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (i <= r) {
    if (nums[i] === 0) {
      swap(l, i);
      l += 1;
    } else if (nums[i] === 2) {
      swap(r, i);
      r -= 1;
      i -= 1;
    }
    i++;
  }
};
function swap(a, b) {
  let t = nums[a];
  nums[a] = nums[b];
  nums[b] = t;
}
let nums = [2, 0, 2, 1, 1, 0];

sortColors(nums);

console.log(nums);
