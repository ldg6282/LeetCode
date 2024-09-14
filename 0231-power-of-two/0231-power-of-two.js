/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let count = 0;
    
    for (let i = 0; i < 32; i++) {
      if (Math.pow(2, count) === n) {
        return true;
      }
      count++;
    }
  
    return false;
};