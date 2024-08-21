/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1;
    }
  
    const arr = [...s];
    const result = arr.reduce((acc, cur) => { 
        acc[cur] = (acc[cur] || 0) + 1; 
        return acc;
    }, {})
    let count = 0;
    let maxNum = 0;
    let hasNum = false;
  
    for (const num in result) {
        if (result[num] % 2 === 0) {
            count += result[num];
        } else if(Object.keys(result).length === 1) {
            return s.length;
        } else {
            count += result[num] - 1;
            hasNum = true;
        }
    }

    if (hasNum) {
        return count + 1;
    } else {
        return count;
    }
};