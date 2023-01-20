var mySqrt = function(x) {
    if(x === 0)return 0;
    let res = 1
    for(let i = 0 ; i < x;i++){
        if(i * i == x){
            res = i
            break
        }
        if(i * i > x){
           res = i - 1
           break
        }
    }  
    return res;
};


let num = 2147395600

console.log(mySqrt(num))