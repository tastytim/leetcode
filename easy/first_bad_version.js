
//BINARY SEARCH




var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n -1 

        while (start <= end){
            let mid = Math.floor((start + end)/2)

            if(isBadVersion(mid)){
                end = mid - 1
            }else if(!isBadVersion(mid)){
                start = mid + 1
            }else{
                return mid
            }
        }
        return start
    };
};