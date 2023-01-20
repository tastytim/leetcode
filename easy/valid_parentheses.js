var isValid = function (s) {
  let regex = /[(){}[\]]/g;
  let strArray = s.match(regex);

  const stack = [];
  const openSet = new Set(["(", "[", "{"]);

  const closeOpenMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < strArray.length; i++) {
    if (openSet.has(strArray[i])) {
      stack.push(strArray[i]);
    } else {
      const pop = stack.pop();
      if (pop !== closeOpenMap.get(strArray[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

let str3 = "{[]}";
console.log(isValid(str3));
