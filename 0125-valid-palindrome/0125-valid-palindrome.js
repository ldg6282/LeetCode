/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0 && " ") {
        return true;
    }

    const str = s.replaceAll(" ", "");
    const strUpper = str.toUpperCase();
    const strLower = str.toLowerCase();
    let newStr = "";
    for (let i = 0; i < strUpper.length; i++) {
        if (strUpper[i] === strLower[i]) {
            strUpper.slice(strUpper[i]);
        } else {
            newStr += strLower[i];
        }
    }

    return newStr === [...newStr].reverse().join("");      
};