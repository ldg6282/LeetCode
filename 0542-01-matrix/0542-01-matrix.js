/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const newMat = mat.flat();
    const arr = [];
    for (let i = 0; i < newMat.length; i++) {
        if (newMat[i] === 1) {
        if (newMat[i - 1] === 0 || newMat[i + 1] === 0 || newMat[i + 3] === 0 || newMat[i - 3] === 0) {
            arr.push(1)
        } else if (newMat[i - 2] === 0 || newMat[i - 6] === 0 || newMat[i - 4] === 0 || newMat[i + 2] === 0 || newMat[i + 6] === 0 || newMat[i + 4] === 0 || newMat[i + 5] === 0 || newMat[i + 10] === 0 || newMat[i - 5] === 0 || newMat[i - 10] === 0) {
            arr.push(2)
        } else {
            arr.push(3)
        }
        } else {
        arr.push(newMat[i])
        }
    }  
    const result = [];
    
    for (let i = 0; i < arr.length; i += mat[0].length) {
        result.push(arr.slice(i, i + mat[0].length));
    }
    return result;
};