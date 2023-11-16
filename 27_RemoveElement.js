/*
Given an integer array nums and 
an integer val,remove all occurrences 
of val in nums in-place.
The relative order of the 
elements may be changed.
*/

const removeElement = function (nums, value) {
  if (nums.length < 1) return;
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      nums[l] = nums[i];
      l++;
    }
  }

  return l;
};

nums = [1];

const p = removeElement(nums, 1);
console.log(p);
