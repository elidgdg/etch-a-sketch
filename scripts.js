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
    gridSquare.addEventListener('mouseover', () => setColor(gridSquare, 'red'));
});