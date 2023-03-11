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
var nums = [3, 0, 1];
var missingNumber = function (nums) {
  // let arr = Array.from(Array(nums.length).keys());
  // let a = arr.filter((e) => !nums.includes(e));
  // if (a.length > 0) return a[0];
  // else return Math.max(...nums) + 1;



  
  //formula for the sum of a sequence of consecutive numbers, which is:
  //sum = (n * (n + 1)) / 2
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
};

console.log(missingNumber(nums));
// @lc code=end
