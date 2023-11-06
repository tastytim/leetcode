/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const arr = []
    
    const backtrack = (start, path)=>{
        arr.push([...path])
        for(let i = start; i < nums.length; i++){
            path.push(nums[i])
            backtrack(i+1,path)
            path.pop()
        }
    }
    
    backtrack(0, [])
    return arr
};