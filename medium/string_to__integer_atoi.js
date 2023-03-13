var myAtoi = function(s) {
    const num = parseInt(s)
    if(isNaN(num))return 0
    const INT_MIN = -Math.pow(2,31)
    const INT_MAX = Math.pow(2,31) -1
    return Math.min(Math.max(num, INT_MIN), INT_MAX)
};