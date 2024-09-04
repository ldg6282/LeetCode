/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [];
  
    for (let i = 0; i <= n; i++) {
        const newN = i.toString(2).split("");
        let count = newN.filter(element => "1" === element).length;
        result.push(count);
    }
    
    return result;
};