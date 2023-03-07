

var nums = [4,1,2,1,2]
var nums1 = [2,2,1]


//using xor
var singleNumber = function(nums) {
    return nums.reduce((a,b)=> a^b,0)
}

//using hashtable
var singleNumber = function(nums) {
    let hash = {}
    for(let num of nums){
        if(hash[num])hash[num]++
        else hash[num] = 1
    }
    for(let num in hash){
        if(hash[num] === 1)return Number(num)
    }
}

console.log(singleNumber(nums))  //4
console.log(singleNumber(nums1)) //1