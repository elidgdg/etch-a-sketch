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
            gridSquare.innerText = "0";
            row.appendChild(gridSquare);
        }
        container.appendChild(row);
    }
}

createDivs();