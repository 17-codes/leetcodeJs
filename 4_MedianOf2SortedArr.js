const findMedianSortedArrays = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  let sortedResult = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      sortedResult.push(nums1[i]);
      i++;
    } else {
      sortedResult.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    sortedResult.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    sortedResult.push(nums2[j]);
    j++;
  }
  console.log(sortedResult);
  let mid = (sortedResult.length - 1) / 2;
  return (sortedResult[Math.floor(mid)] + sortedResult[Math.ceil(mid)]) / 2;
};

// var findMedianSortedArrays = function (n1, n2) {
//   let n = [...n1, ...n2];
//   return n;
// };

const a1 = [0];
const a2 = [25];

const result = findMedianSortedArrays(a1, a2);
console.log(result);
