var isAnagram = function (s, t) {
    if(s.length != t.length){
        return false
    }
    let map = new Map();
  
    for (let el of t) {
      map.set(el, map.has(el) ? map.get(el) + 1 : 0);
    }
    for (let el of s) {
      if (map.has(el) && map.get(el) > 0) {
        map.set(el, map.get(el) - 1);
      } else if (map.has(el)) {
        map.delete(el);
      }
    }
    
    return map.size == 0;
};


 var s = "ab", t = "a"

 console.log(isAnagram(s,t))