var search = function (nums, target) {
  let r = nums.length - 1;
  let l = 0;
  while (l < r) {
    let m = (l + r) / 2;
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let t = 0;
console.log(search(nums, t));
