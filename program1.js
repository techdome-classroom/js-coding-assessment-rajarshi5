const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;

  const exploreIsland = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 'W') {
      return;
    }

    grid[row][col] = 'W';

    exploreIsland(row - 1, col); // up
    exploreIsland(row + 1, col); // down
    exploreIsland(row, col - 1); // left
    exploreIsland(row, col + 1); // right
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'L') {
        exploreIsland(row, col);
        islandCount++;
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;