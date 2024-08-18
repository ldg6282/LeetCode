/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];
    if (oldColor === color) {
        return image;
    }

    const rows = image.length;
    const cols = image[0].length;

    let pixelsToChange = [[sr, sc]];

    while (pixelsToChange.length > 0) {
        let [r, c] = pixelsToChange.pop();

        if (image[r][c] === oldColor) {
            image[r][c] = color;

            if (r > 0) pixelsToChange.push([r-1, c]);
            if (r < rows-1) pixelsToChange.push([r+1, c]);
            if (c > 0) pixelsToChange.push([r, c-1]);
            if (c < cols-1) pixelsToChange.push([r, c+1]);
        }
    }

    return image;
};