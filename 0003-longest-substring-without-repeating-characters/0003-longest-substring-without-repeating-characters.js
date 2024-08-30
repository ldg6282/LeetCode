/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = [];
    let maxLength = 0;
    let subStr = [];
    
    for (let i = 0; i < s.length; i++) {
        const charIndex = subStr.indexOf(s[i]);
        
        if (charIndex !== -1) {
            if (subStr.length > maxLength) {
                maxLength = subStr.length;
                result = [...subStr];
            }
            subStr = subStr.slice(charIndex + 1);
        }
        subStr.push(s[i]);
    }
    
    if (subStr.length > maxLength) {
        result = [...subStr];
    }
    
    return result.length;
};