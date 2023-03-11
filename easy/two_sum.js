/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for(let i = 0 ;i< nums.length;i++){
  //     for(let j = 1;j< nums.length;j++){
  //         if((nums[i] + nums[j]) == target){
  //             return [i,j]
  //         }
  //     }
  // }

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const integer = nums[i];
    const complement = target - integer;

    //esli po etomu vychisleniyu mapa imeet uzhe to my vozvrashaem index iz toi mappy i index i tekushego nomera
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    //kidaem po nomeru nash index
    map.set(integer, i);
  }
};

const nums = [2, 0, 11, 15, 7];
const target = 9;
const indices = twoSum(nums, target);
console.log(indices); // [0, 1]
