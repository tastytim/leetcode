
var reverse = function(x) {
   let result
   if(x > 0){
       result = Number(x.toString().split('').reverse().join(''))
   }else{
      result = Number('-' + Math.abs(x).toString().split('').reverse().join(''))
   }
   let isOutRange = result < -Math.pow(2,31) || result > Math.pow(2,31) - 1
   return isOutRange ? 0 : result
};