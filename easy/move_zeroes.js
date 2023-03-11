
var nums = [0, 0, 1,2,4] //Output: [1,0,0]
var moveZeroes = function (nums) {
    // count =0
    // while(nums.includes(0)){
    //         count++
    //         nums.splice(nums.indexOf(0),1)
    // }
    // for(let i = 0 ;i < count;i++){
    //     nums.push(0)
    // }
    // return nums
   

    let nonZeroIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[nonZeroIndex] = nums[i]
            nums[i] = 0
            nonZeroIndex++
        }
    }
    return nums
};

console.log(moveZeroes(nums))
