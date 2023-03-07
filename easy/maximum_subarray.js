//Algoritm Kadene

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //6
let nums2 = [1]; //1

var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (i of nums) {
    currentSum = Math.max(i, currentSum + i);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray(nums));
