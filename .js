const container = document.querySelector(".container");

// Creating input for the size of squares
const warning = document.createElement("div");
const input = document.createElement("input");
const start = document.createElement("button");
start.textContent = "Start";
start.style.fontSize = "5px";
start.style.margin = "2px";
warning.style.fontSize = "5px";
warning.textContent = "Your grid's size is (between 10 and 100): "
input.style.fontSize = "5px";
input.style.border = "1px solid black";
input.style.width = "100px";
input.style.height = "10px";
container.appendChild(warning);
container.appendChild(input);
container.appendChild(start);

// Changing color of the grid
function changeColor(grid) {
    if (getComputedStyle(grid).backgroundColor === "rgba(0, 0, 0, 0)") {
        let a = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        let c = parseInt(Math.random() * 255);
        let string = `rgb(${a}, ${b}, ${c})`;
        grid.style.backgroundColor = string;
    }
}

// Function that creates grid
function createGrid(size) {
    warning.remove();
    input.remove();
    start.remove();
    container.style.justifyContent = "normal";
    container.style.alignItems = "normal";

    // Creating grid and adding color effect
    let sSize = 150 / size;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = sSize + "px";
        square.style.height = sSize + "px";

        square.addEventListener("mouseenter", function(e) {
            changeColor(e.target);
            square.setAttribute("class", "child");
        });
        container.appendChild(square);
    }
}

// Handling the input from the user
start.addEventListener("click", () => {
    let size = parseInt(input.value);
    if (Number.isInteger(size) && size >= 10 && size <= 100) {
        createGrid(size);
    }
    else {
        alert("Invalid input");
    }
});

//Delete button
const button = document.querySelector(".eraser");
function resetGrid() {
    let li = document.querySelectorAll(".child");
    for (i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
}
button.addEventListener("click", resetGrid);