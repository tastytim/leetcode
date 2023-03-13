

var longestCommonPrefix = function (strs) {
  let shortPrefix = strs[0];
  let current;
  let prefix = "";

  
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortPrefix.length) {
      shortPrefix = strs[i];
    }
  }


  
  for (let j = 0; j < shortPrefix.length; j++) {
    current = strs[0][j];
    console.log(current)
    for (let m = 1; m < strs.length; m++) {
      if (current != strs[m][j]) {
        return prefix;
      }
    }
    prefix += current;
  }
  return prefix;
}

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));


