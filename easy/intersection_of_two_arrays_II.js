
var intersect = function(nums1, nums2) {
   let intersection = []
   let map = new Map()
   for(el of nums1){
       map.set(el, map.has(el) ? map.get(el) + 1 : 1)
   }
   for(el of nums2){
       if(map.has(el) && map.get(el) > 0){
           intersection.push(el)
           map.set(el, map.get(el) - 1)
       }
   }

   return intersection
};



//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [4,9]
//Explanation: [9,4] is also accepted.