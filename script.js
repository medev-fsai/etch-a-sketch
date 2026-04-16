
/*
STEP 1: Sketchpad construction
STEP 2: Add event listener to each element of sketchpad.
*/
const MAX_SIZE = 480;
const SKETCH_SIZE = 16//+prompt("Enter number of squares per row: (1-25)", '16');
const SQUARE_SIZE = Math.floor(MAX_SIZE/SKETCH_SIZE);

const sketchpad = document.querySelector("#sketch-container");
for(let i=0; i<SKETCH_SIZE**2;){
    let square = document.createElement("div");
    square.classList.toggle("item");
    square.setAttribute("id", `square-${++i}`)
    square.style.setProperty("min-width", `${SQUARE_SIZE}px`);
    sketchpad.appendChild(square);
}

let squaresList = document.querySelectorAll(".item");
squaresList.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("dark");
    });
});

