/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

let s = "abcde";
let goal = "cdeab";
var rotateString = function (s, goal) {
//   if (!s && !goal) {
//     return;
//   }

//   let bul = false;
//   let splitA = s.split("");
//   let splitB = goal.split("");

//   for (let i = 0; i < splitA.length; i++) {
//     splitA = splitA.concat(splitA.shift());
    
//     if (splitA.toString() == splitB.toString()) {
//       bul = true;
//     }
//   }

//   return bul;

if (s.length !== goal.length) return false;
    const shifted = s + s;
    console.log(shifted)
    return shifted.includes(goal);
};

console.log(rotateString(s, goal));
