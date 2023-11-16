function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
l1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
var inorderTraversal = function (root) {
  let result = [];
  let curr = root;
  if (!root) return result;
  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }
    result.push(node.val);
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(curr);
  return result;
};

const res = inorderTraversal(new TreeNode(null));
console.log(res);
