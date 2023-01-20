var plusOne = function (digits) {
    let arr = [];
    digits = BigInt(digits.join(""));
    digits++;
    digits
      .toString()
      .split("")
      .map((e) => arr.push(parseInt(e)));
    return arr;
  };




let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
//Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne(digits))

