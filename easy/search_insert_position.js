var nums = [2,3,4,5,6]
var target = 0

var searchInsert = function(nums, target) {
    let index = 0 
    while(index < nums.length && nums[index] < target){
        index++
    }
    return index
};


console.log(searchInsert(nums,target))
