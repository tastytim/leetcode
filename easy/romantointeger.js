var romanToInt = function (s) {
  let romanHash = {
    IV: 4,
    XC: 90,
    CM: 900,
    CD: 400,
    I: 1,
    V: 5,
    IX: 9,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    XL: 40,
    M: 1000,
  };

  let splitted = s.split("");
  let count = 0;

  for (let i = 0; i < splitted.length; i++) {
    let twoFirstLetters = splitted[i] + splitted[i + 1];
    if (romanHash[twoFirstLetters]) {
      count = count + romanHash[twoFirstLetters];
      i++;
    } else {
      count = count + romanHash[splitted[i]];
    }
  }
  return count;
};

s = "MCDLXXVI";
romanToInt(s);
console.log(romanToInt(s));
