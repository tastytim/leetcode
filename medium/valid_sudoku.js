/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    // check rows
    for (let y = 0; y < board.length; y++) {
       let arr = [];
       for (let i = 0; i < board[y].length; i++) {
         if (board[y][i] != ".") {
           arr.push(board[y][i]);
         }
       }
       console.log(arr);
       if (arr.length != new Set(arr).size) {
         return false;
       }
     }
   
     //check columns
   
     for (let i = 0; i < board.length; i++) {
       let arr = [];
       for (let j = 0; j < board[i].length; j++) {
         if (board[j][i] != ".") {
           arr.push(board[j][i]);
         }
       }
       console.log(arr);
       if (arr.length != new Set(arr).size) {
         return false;
       }
     }
   
     //check sub boxes
     for (let rowBox = 0; rowBox < 3; rowBox++) {
       for (let colBox = 0; colBox < 3; colBox++) {
         let set = new Set();
         for (let row = rowBox * 3; row < rowBox * 3 + 3; row++) {
           for (let col = colBox * 3; col < colBox * 3 + 3; col++) {
             let val = board[row][col];
             if (val !== ".") {
               if (set.has(val)) {
                 return false;
               } else {
                 set.add(val);
               }
             }
           }
         }
       }
     }
   
     return true;
   };