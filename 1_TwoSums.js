let nums = [2, 7, 11, 15]; //t=9  [0,1]
nums = [3, 3]; // t=6       [0,1]
nums = [3, 2, 3, 41]; //t=6    [1,2]

let target = 6;
const result = [];
const twoSums = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let cal = nums[i] + nums[j];
      if (cal === target) {
        result.push(i + 1, j + 1);
        return result;
      }
    }
  }
  return result;
};

const twoSums1 = (nums, target) => {
  let min = Math.min(...nums);
  let result = [];
  let modArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      modArr.push(nums[i]);
    }
  }
  let l = 0;
  let r = modArr.length - 1;
  while (l > r) {
    if (modArr[l] + modArr[r] === target) {
      return [l, r];
    }
    r--;
  }
};

function tw(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }
}

console.log(twoSums(nums, target));
