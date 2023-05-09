function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var diameterOfBinaryTree = function (root) {
  function height(node) {
    if (node == null) {
      return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  }

  function diameter(root) {
    if (root == null) {
      return 0;
    }

    let lheight = height(root.left);
    let rheight = height(root.right);

    let ldiametr = diameter(root.left);
    let rdiametr = diameter(root.right);

    return Math.max(lheight + rheight + 1, Math.max(ldiametr, rdiametr));
  }

  return diameter(root);
};

// Пример использования:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // 3
