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

var nums = [0,1,3]
var missingNumber = function (nums) {
    // let arr = Array.from(Array(nums.length).keys());
    // let a = arr.filter((e) => !nums.includes(e));
    // if (a.length > 0) return a[0];
    // else return Math.max(...nums) + 1;



    //formula arifmeticheskoi progressii Sn = ((A1 + An)n / 2)
    let n = nums.length
    return n * (n+1) / 2 - nums.reduce((a,b)=> a + b,0)

    //3 * (3+1) / 2 
    //12 - 4
    //8
  };
  // @lc code=end


console.log(missingNumber(nums))
  