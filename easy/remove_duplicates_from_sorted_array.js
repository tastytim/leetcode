/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  // for (let i = 0; i < nums.length ; i++) {
  //     if( nums[i] === nums[i+1]){
  //         nums.splice(i, 1)
  //        i--;
  //     }
  // }
  // return nums.length



  if (nums.length === 0) return 0; 


  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1; //length


};

var nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums))
