/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {

    const arr= []
    
    const backtrack = (current, index)=>{
        if (index == s.length){
            arr.push(current)
            return
        }

        backtrack(current + s[index].toLowerCase() , index+1)

       if (/[a-zA-Z]/.test(s[index])) {
            backtrack(current + s[index].toUpperCase(), index+1)
        }
    }

    backtrack('',0)


    return arr
};

