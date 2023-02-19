/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
 * @return {number}
 */

[4, 2, 6, 1, 3];

const root = {
  val: 4,
  left: { val: 2,
     left: {
         val: 1 
        },
      right: { val: 3 } },
  right: { val: 6 },
};
// const root = {
//   val: 1,
//   left: { val: 0 },
//   right: { 
//     val: 48,
//      left: { val: 12 },
//       right: { val: 49 } },
  
// };



var minDiffInBST = function (root) {
    let prevVal = -Infinity;
    let minDiff = Infinity;
    
    const inorder = (node) => {
        if (node === null) return;

        if(node.left){
           inorder(node.left); 
        }
        
        
        minDiff = Math.min(minDiff, node.val - prevVal);
        console.log(prevVal)
        prevVal = node.val;
        console.log('prevVal', node)
        
        if(node.right){
           inorder(node.right); 
        }
        
    }
    
    inorder(root);
    
    return minDiff;
};

console.log(minDiffInBST(root));
