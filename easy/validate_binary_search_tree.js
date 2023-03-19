

/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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

var isValidBST = function (root) {
    let prevVal = -Infinity;
    let isValid = true;
  
    function inOrderTraversal(node) {
      if (!node) {
        return;
      }
      inOrderTraversal(node.left);
      if (node.val <= prevVal) {
        isValid = false;
        return;
      }
      prevVal = node.val;
      inOrderTraversal(node.right);
    }
    inOrderTraversal(root);
    return isValid;
  };
  
  