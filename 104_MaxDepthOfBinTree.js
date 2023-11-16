const maxDepth1 = function (root) {
  if (!root) return 0;
  let c = 1;
  let i = 0;
  function dfs(node) {
    if (!node.left && !node.right) c--;
    if (node.left) {
      c++;
      dfs(node.left);
    }
    if (node === root && root.right) c--;
    if (node.right) {
      c++;
      dfs(node.right);
    }
  }
  dfs(root);
  return c + 1;
};
var maxDepth2 = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) return 0;
  const data = [root];
  let level = 0;
  let node = null;
  while (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      node = data.shift();
      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);
    }
    level += 1;
  }
  return level;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// l1 o/p 3
let l1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// l2 o/p 3

let l2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, null, new TreeNode(5))
);

// l3 o/p 3

let l3 = new TreeNode(1, null, new TreeNode(3, null, new TreeNode(5)));

let res = maxDepth(l1);
console.log(res);
