/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    const result = [];
  
    for (let i = 0; i < t.length; i++) {
        if (s[sIndex] === t[i]) {
            result.push(t[i]);
            sIndex++;
        }
    }
  
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== s[i]) {
            return false;
        }
    }
  
    return result.length === s.length;
};