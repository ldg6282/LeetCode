/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const result = [];
    const a = [...ransomNote].sort();
    const b = [...magazine].sort();
  
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result.push(a[i]);
                b.splice(j, 1);
                break;
            }
        }
    }
  
    return a.length === result.length;ㄴ
};