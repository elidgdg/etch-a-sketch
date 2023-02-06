// Create a 16x16 grid of divs
function createDivs(squaresPerSide) {
    const container = document.querySelector(".container");
    const rows = squaresPerSide;
    const cols = squaresPerSide;


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
createDivs(16);
// Set the color of an html element
function setColor(element, color) {
    element.style.backgroundColor = color;
}

function draw(pixel) {
    if (!mouseDown) {return;}

    setColor(pixel, 'red');
}

function changeCanvasSize() {
    let squaresPerSide = 0;
    while (squaresPerSide < 1 || squaresPerSide > 100 || isNaN(squaresPerSide)) {
        squaresPerSide = parseInt(prompt("How many squares per side?"));
        console.log(squaresPerSide);

    }

}

const gridSquares = document.querySelectorAll(".gridsquare");
const container = document.querySelector(".container");
let mouseDown = false;

// Check if mouse is held down
container.addEventListener('mousedown', () => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));

// Listen for mouse entering/leaving a gridsquare
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', () => draw(gridSquare));
    gridSquare.addEventListener('mousedown', () => {
        mouseDown = true;
        draw(gridSquare);
    });
});

const changeSizeBtn = document.querySelector(".size-btn");
changeSizeBtn.addEventListener("click", () => changeCanvasSize());
//IMPLEMENT CHANGEcanvasSIZE FUNCTION

