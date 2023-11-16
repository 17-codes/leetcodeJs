var removeDuplicates = function (nums) {
  let i = 1;
  let j = i;
  while (i < nums.length) {
    while (j < nums.length) {
      if (nums[i] > nums[i - 1]) {
        i++;
      } else if (nums[i] < nums[j] && nums[j] > nums[i - 1]) {
        nums[i] = nums[j];
        i++;
      } else {
        j++;
      }
    }
    return i;
  }
  return i;
};

let nums = [1];

let result = removeDuplicates(nums);
console.log(result, nums);
