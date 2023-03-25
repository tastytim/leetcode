/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true; 
  return isMirror(root.left, root.right);
};

function isMirror(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return (
    node1.val === node2.val &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  );
}
