var firstUniqChar = function(s) {
    
    let arr = s.split('')
    let map = new Map()

    for(let i = 0;i < arr.length;i++){
        map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) +1 : 1 )
    }

    for(let i =0 ;i< arr.length ;i++){
        if(map.get(arr[i]) == 1){
            return i
        }
    }

    return -1
    
};


var s ="leetcode"

console.log(firstUniqChar(s))