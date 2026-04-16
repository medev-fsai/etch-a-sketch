
/*
STEP 1: Sketchpad construction
STEP 2: Add event listener to each element of sketchpad.
*/
const MAX_SIZE = 700;
const SKETCH_SIZE = 8;
const sketchpad = document.querySelector("#sketch-container");
const inputSizeButton = document.querySelector("button");

inputSizeButton.addEventListener("click", ()=>{
    const size = +prompt("Enter grid size : (1 - 100 max)", '16');
    clearSketchpad();
    createNewSketchpad(size);
});

createNewSketchpad(SKETCH_SIZE);

function createNewSketchpad(size){
    const squareSize = MAX_SIZE / size;
    for(let i=0; i<size**2;){
        let square = document.createElement("div");
        square.classList.toggle("item");
        square.setAttribute("id", `square-${++i}`)
        square.style.setProperty("width", `${squareSize}px`);
        square.style.setProperty("height", `${squareSize}px`);
        sketchpad.appendChild(square);
        //Add event listener to square
        square.addEventListener("mouseover", () => {
            square.classList.add("dark");
        });
    }
}

function clearSketchpad(){
    sketchpad.replaceChildren();
}

