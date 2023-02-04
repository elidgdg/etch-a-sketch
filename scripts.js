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

function setColor(element, color) {
    element.style.backgroundColor = color;
}

createDivs();

const gridSquares = document.querySelectorAll(".gridsquare");

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', () => setColor(gridSquare, 'red'));
    gridSquare.addEventListener('mouseleave', () => setColor(gridSquare, 'black'));
});

const container = document.querySelector(".container");
container.addEventListener('mousedown', () => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));

let mouseDown = false;

container.addEventListener('mousedown', () => (console.log(mouseDown)));
container.addEventListener('mouseup', () => (console.log(mouseDown)));