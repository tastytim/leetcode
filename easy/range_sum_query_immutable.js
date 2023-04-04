// class NumArray {
//   nums: number[];
//   constructor(nums: number[]) {
//     this.nums = nums;
//   }
//   sumRange(left: number, right: number): number {
//     let count = this.nums[left];
//     for (let i = left + 1; i < right+1; i++) {
//       count += this.nums[i];
//       console.log(count)
//     }
//     return count;
//   }
// }
var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        this.prefixSum = [0]; // Initialize an array to store prefix sums
        for (var i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i]; // Calculate prefix sum and store it in the array
        }
        console.log(this.prefixSum);
    }
    NumArray.prototype.sumRange = function (left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left]; // Return the sum of elements between left and right
    };
    return NumArray;
}());
var num = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(num.sumRange(0, 5));