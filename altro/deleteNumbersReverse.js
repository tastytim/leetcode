let str = "dsfdskhkjh435jlj434";

let set  = new Set (['1','2','3','4','5','6','7','8','9', '0'])

const FilterAndReverse = (str) => {
  //let filtered = str.split("").filter((e)=> !set.has(e)).reverse().join('');
  //return filtered;

  return str.replace(/\d/g, '').split('').reverse().join('')
};



console.log(FilterAndReverse(str));
