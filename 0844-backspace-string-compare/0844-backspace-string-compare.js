/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const longerStr = s.length > t.length ? s : t;
    let newS = [];
    let newT = [];
  
    for (let i = 0; i < longerStr.length; i++) {
      if (s[i] !== "#" && s[i] !== undefined) {
        newS.push(s[i]);
      } else if (s[i] === "#") {
        newS.pop(s[i - 1]);
      }
      if (t[i] !== "#" && s[i] !== undefined) {
        newT.push(t[i]);
      } else if (t[i] === "#") {
        newT.pop(t[i - 1])
      }
    }

    return newS.toString() === newT.toString() ? true : false;
};