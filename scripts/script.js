// Create a webpage with a 16x16 grid of square divs

createGrid(16);

function createGrid(gridSize) {
  const container = document.querySelector(".container");

  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);

  // Create 16 rows
  for (let rowNum = 1; rowNum <= gridSize; rowNum++) {
    const row = document.createElement("div");
    row.classList.add("row", `row-${rowNum}`);
    grid.appendChild(row);
    // Create 16 columns in each row
    for (let colNum = 1; colNum <= gridSize; colNum++) {
      const col = document.createElement("div");
      col.classList.add("col", `col-${colNum}`);
      row.appendChild(col);
    }
  }
}
