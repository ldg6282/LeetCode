/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const arr = [];
    for (let i = 0; i < points.length; i++) {
      arr.push([points[i][0] ** 2 + points[i][1] ** 2, i]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    
    return arr.slice(0, k).map(item => points[item[1]]);
};