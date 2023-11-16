var isSymmetric = function (root) {
  let a = ["", ""];
  let i = 0;
  function checkSymetric(r) {
    if (!r.left && !r.right) return;
    if (i === 0) {
      if (r.left) {
        a[i] = a[i] + r.left.val;
        checkSymetric(r.left);
      } else a[i] += "n";
      if (r === root) {
        i = 1;
      }
      if (r.right) {
        a[i] += r.right.val;
        checkSymetric(r.right);
      } else a[i] += "n";
    } else {
      if (r.right) {
        a[i] += r.right.val;
        checkSymetric(r.right);
      } else a[i] += "n";
      if (r.left) {
        a[i] = a[i] + r.left.val;
        checkSymetric(r.left);
      } else a[i] += "n";
    }
  }
  checkSymetric(root);
  return a[0] === a[1];
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let l1 = new TreeNode(
  1,
  new TreeNode(45, new TreeNode(3), new TreeNode(2)),
  new TreeNode(45, new TreeNode(2), new TreeNode(3))
);
let l2 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
isSymmetric(l2);
