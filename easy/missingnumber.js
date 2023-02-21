/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let arr = Array.from(Array(nums.length).keys());
    let a = arr.filter((e) => !nums.includes(e));
    if (a.length > 0) return a[0];
    else return Math.max(...nums) + 1;
  };
  // @lc code=end
  