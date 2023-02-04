// Create a 16x16 grid of divs
function createDivs() {
    const container = document.querySelector(".container");
    const rows = 16;
    const cols = 16;


    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < cols; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.className = "gridsquare";
            row.appendChild(gridSquare);
        }
        container.appendChild(row);
    }
}
createDivs();
// Set the color of an html element
function setColor(element, color) {
    element.style.backgroundColor = color;
}

function draw(pixel) {
    if (!mouseDown) {return;}

    setColor(pixel, 'red');
}

const gridSquares = document.querySelectorAll(".gridsquare");
const container = document.querySelector(".container");
let mouseDown = false;

// Listen for mouse entering/leaving a gridsquare
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', () => draw(gridSquare));
});
// Check if mouse is held down
container.addEventListener('mousedown', () => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));


