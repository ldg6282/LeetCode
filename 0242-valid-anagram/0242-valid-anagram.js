/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const arr1 = [...s];
    const arr2 = [...t];
    const result = []
    
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            result.push(arr1.indexOf(arr1[i]));
        }
    }
    
    if(result.length === arr1.length) {
        return true;
    } else {
        return false;
    }
};