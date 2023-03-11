/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^A-Za-z0-9]/g;
    const newStr = s.replace(regex, "").toLowerCase();
    const reversestr = newStr.split('').reverse().join('');
    if(newStr == ' '){
        return true
    }
    return newStr === reversestr
};


//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.