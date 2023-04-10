var nextGreatestLetter = function (letters, target) {
  // SOLUTION 1
  let L = 0;
  let R = letters.length - 1;

  while (L <= R) {
    let mid = Math.floor(L + (R - L) / 2);
    console.log(mid)
    let curr = letters[mid];

    if (curr > target) {
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }

  console.log(L)
  return letters[L % letters.length];

	return letters[L];
  // SOLUTION 2
  let firsCharacter = letters[0];
  for (let letter of letters) {
    if (letter > target) return letter;
  }
};

var letters = ["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"];
//var letters = ["e", "e", "n", "n", "n", "n"];
//var letters = ["n", "n", "n", "n"];
//var letters = ["n", "n"];
console.log(nextGreatestLetter(letters, "e"));

//f
