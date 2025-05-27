// Create a webpage with a 16x16 grid of square divs
let gridSize = 16;
let tileColor = "black";
let isRainbowMode = false;
createGrid(gridSize);

// Listener to draw on grid
let isDrawable = false;
const grid = document.querySelector(".grid");
// Makes it so you can only draw when the mouse is being held down
document.body.addEventListener("mousedown", () => (isDrawable = true));
document.body.addEventListener("mouseup", () => (isDrawable = false));

grid.addEventListener("mouseover", (event) => {
  let target = event.target;

  if (target.classList[0] === "col" && isDrawable) {
    if (isRainbowMode) {
      tileColor = `rgb(${getRandom(0, 255)}, 
      ${getRandom(0, 255)}, 
      ${getRandom(0, 255)})`;
    }
    target.style.backgroundColor = tileColor;
  }
});

// Input to change grid size
const rangePicker = document.querySelector("#range_picker");
rangePicker.addEventListener("change", () => {
  gridSize = rangePicker.value;
  createGrid(gridSize);
});

// Input to change color
const colorPicker = document.querySelector("#color_picker");
colorPicker.addEventListener("change", () => {
  tileColor = colorPicker.value;
});

// Button to clear grid
const clearBtn = document.querySelector("#clear_btn");
clearBtn.addEventListener("click", () => createGrid(gridSize));

const rainbowBtn = document.querySelector("#rainbow_btn");
rainbowBtn.addEventListener("click", () => (isRainbowMode = !isRainbowMode));

function createGrid(gridSize) {
  const grid = document.querySelector(".grid");
  clearGrid(grid);

  // Create 16 rows
  for (let rowNum = 1; rowNum <= gridSize; rowNum++) {
    const row = document.createElement("div");
    row.classList.add("row", `row-${rowNum}`);
    grid.appendChild(row);
    // Create 16 columns in each row
    for (let colNum = 1; colNum <= gridSize; colNum++) {
      const col = document.createElement("div");
      col.classList.add("col", `col-${colNum}`, `row-${rowNum}`);
      row.appendChild(col);
    }
  }
}

function clearGrid(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
