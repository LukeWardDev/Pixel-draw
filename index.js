//Get access to all dom elements needed for the app
const newGridBtn = document.querySelector('.new-grid');
const colorInput = document.querySelector('#color');
const setColorButton = document.querySelector('.color');
const gridContainer = document.querySelector('.grid-container');

//Set constants for contanier height and width
const containerWidth = gridContainer.offsetWidth;
const containerHeight  = gridContainer.offsetHeight;


//Set initial Color variable
let color = "";

//Creates a single grid cill based off of a grid size
function createGridCell(gridSize){
    let gridCellWidth = Math.floor(containerWidth / gridSize);
    let gridCellWidthString = gridCellWidth.toString();
    gridCellWidthString = gridCellWidthString + "px";
    let gridCellHeight = Math.floor(containerHeight / gridSize);
    let gridCellHeightString = gridCellHeight.toString();
    gridCellHeightString = gridCellHeightString + "px";
    let gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.style.width = gridCellWidthString;
    gridCell.style.height = gridCellHeightString;
    return gridCell;
}


//Inserts grid cells into grid container
function createGrid(gridSize){
    //Clear grid container
    gridContainer.innerHTML = "";
    for(let i = 0; i < gridSize; i++){
        for(let y = 0; y < gridSize; y++){
            let gridCell = createGridCell(gridSize);
            gridContainer.append(gridCell);
        }
    }
    const gridCells = document.querySelectorAll('.grid-cell');

    //Add click event listener to all grid cells
    for(let i=0; i < gridCells.length; i++){
        gridCells[i].addEventListener('click', ()=> {
            gridCells[i].style.backgroundColor = color;
        })
    }
}

//Get all grid cells in container


//Set function for new grid button
newGridBtn.addEventListener('click', () => {
    let newGridSize = prompt("Enter number for new grid size.");
    createGrid(newGridSize);
})

//Set function for set colour button
setColorButton.addEventListener('click', () => {
    color = colorInput.value;
    console.log(color);
})

//Set initial grid size
let gridSize = 16;

//Set 16 x 16 grid when site first loaded
createGrid(16);




