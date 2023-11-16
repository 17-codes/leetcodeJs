var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--;
  }
  while (n > 0) {
    nums1[last] = nums2[n];
    last--;
    n--;
  }
};

let nums1 = [1, 5, 8, 0, 0, 0],
  m = 0,
  nums2 = [2, 3, 6],
  n = 3;

let res = merge(nums1, m, nums2, n);
console.log(nums1);
