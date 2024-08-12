/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const result = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    const arr1 =[];

    for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        arr1.push(s[i]);
    } else {
        const lastArr = arr1.pop();
        if (result[lastArr] !== s[i]) {
        return false;
        }
    }
    
    }
    if (arr1.length === 0) {
        return true;
    } else {
        return false;
    }
};