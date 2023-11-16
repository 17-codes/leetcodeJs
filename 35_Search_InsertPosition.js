function searchInsert(nums, target) {
  let high = nums.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // if (target < nums[high]) return high - 1;
  // return high + 1;
  return low;
}

let nums = [2, 3];
let target = 4;
const result = searchInsert(nums, target);
console.log(result);
