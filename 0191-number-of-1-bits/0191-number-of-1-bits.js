/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const newN = n.toString(2).split("");
    const result = [];
  
    for (let i = 0; i < newN.length; i++) {
      if (newN[i] === "1") {
        result.push(newN[i])
      }
    }
  
    return result.length;
};