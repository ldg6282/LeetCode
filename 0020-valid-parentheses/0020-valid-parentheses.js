/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const result = [];
    const vaild = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (vaild[char]) {
            if (result.length === 0 || result[result.length - 1] !== vaild[char]) {
                return false;
            }
            result.pop();
        } else {
            result.push(char);
        }
    }

    return result.length === 0;
};