function findMinLength(arr, n) {
  let min = arr[0].length;
  for (let i = 1; i < n; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min;
}

function commonPrefix(arr) {
  let arrWordsLength = arr.length;
  let minArrWordLen = findMinLength(arr, arrWordsLength);
  let result = "";
  let current;

  for (let i = 0; i < minArrWordLen; i++) {
    current = arr[0][i];
    for (let j = 1; j < arrWordsLength; j++) {
      if (arr[j][i] != current) {
        return result;
      }
    }
    result += current;
  }
  return result;
}

let arr = ["flower", "flow", "flight"];
let ans = commonPrefix(arr);

if (ans.length > 0) {
  console.log("The longest common prefix is " + ans);
} else {
  console.log("There is no common prefix");
}
