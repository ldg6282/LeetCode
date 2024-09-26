/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const sink = (row, col) => {
      grid[row][col] = "0";
      [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ].forEach(([i, j]) => {
        if (0 <= i && i < grid.length && 0 <= j && j <= grid[i].length) {
          if (grid[i][j] === "1") {
            sink(i, j);
          }
        }
      })
    }
  
    let ground = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          ground++;
          sink(i, j);
        }
      }
    }
  
    return ground;
};