/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const sumAB = parseInt(a, 2) + parseInt(b, 2);
    
    return sumAB.toString(2);
};