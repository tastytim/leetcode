var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
};

var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

rotate(nums, k);
console.log(nums);

// function rotate(nums, k) {
//   k = k % nums.length; // get the actual number of steps to rotate
//   reverse(nums, 0, nums.length - 1); // reverse the entire array
//   reverse(nums, 0, k - 1); // reverse the first k elements
//   reverse(nums, k, nums.length - 1); // reverse the remaining elements
// }

// function reverse(nums, start, end) {
//   while (start < end) {
//     let temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//   }
// }
