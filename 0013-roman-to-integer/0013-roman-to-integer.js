/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
    }
    let saveNum = [];
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (num in roman) {
            if (s[i] === num) {
                saveNum.push(roman[num]);
                sum += roman[num];
            }
        }
        if (saveNum[i] > saveNum[i - 1]) {
            sum -= saveNum[i - 1] * 2;
        }
    }
    
    return sum;
};