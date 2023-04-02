//Dynamic programming
// var climbStairs = function (n) {
//     let s0 = 1;
//     let s1 = 1;
//     let sN;
//     if (n < 2) return 1;
//     for (let i = 2; i <= n; i++) {
//       sN = s0 + s1;
//       s0 = s1;
//       s1 = sN;
//     }
//     return sN;
//   };

//RECURSION

// var climbStairs = function (n) {
//   if (n < 2) return 1;
//   for (let i = 2; i <= n; i++) {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };

var climbStairs= function(n){
    let arr = [n+1]
    arr[0]=1
    arr[1]=1

    for(let i = 2;i<= n;i++){
         arr[i]= arr[i-1] + arr[i-2]
    }

    return arr[n]
}

console.log(climbStairs(5));
//8
