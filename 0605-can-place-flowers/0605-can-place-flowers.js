/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const emptyLeft = (i === 0) || (flowerbed[i - 1] === 0);
            const emptyRight = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);
            
            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    
    return count >= n;
};