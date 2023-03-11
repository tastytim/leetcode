var intersection = function(nums1, nums2) {
    let intersection = []
    let set = new Set(nums1)
    let set2 = new Set(nums2)

    for(el of set){
        if(set2.has(el))intersection.push(el)
    }
    
    return intersection
};

var nums1 = [4,9,5], nums2 = [9,4,9,8,4]


console.log(intersection(nums1,nums2))
