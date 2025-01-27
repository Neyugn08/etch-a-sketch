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

// Function that creates grid
function createGrid(size) {
    warning.remove();
    input.remove();
    start.remove();
    container.style.justifyContent = "normal";
    container.style.alignItems = "normal";

    // Creating grid
    let sSize = container.offsetWidth / size;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.width = sSize + "px";
        square.style.height = sSize + "px";
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
