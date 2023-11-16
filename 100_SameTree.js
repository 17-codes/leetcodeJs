var isSameTree = function (p, q) {
  if (!p || !q) return false;
  let check = true;
  function traverse(nodeP, nodeQ) {
    if (nodeP.val !== nodeQ.val) check = false;
    else if (nodeP.left && nodeQ.left) {
      traverse(nodeP.left, nodeQ.left);
    } else if ((nodeP.left && !nodeQ.left) || (!nodeP.left && nodeQ.left)) {
      check = false;
      return;
    } else if (nodeP.right && nodeQ.right) {
      traverse(nodeP.right, nodeQ.right);
    } else if ((nodeP.right && !nodeQ.right) || (!nodeP.right && nodeQ.right)) {
      check = false;
      return;
    }
  }
  traverse(p, q);
  return check;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let l1 = new TreeNode(1, new TreeNode(45), new TreeNode(2, new TreeNode(3)));
let l2 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(isSameTree(l1, l2));
