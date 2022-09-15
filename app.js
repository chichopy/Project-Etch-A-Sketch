let container = document.getElementById('container');
const randomColor = document.getElementById('randomColor');
let rgbColor = null;

createGrid(4);

function createGrid(divisions) {
    for (let i = 0; i < divisions; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < divisions; j++) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('divContainer');
            divContainer = changeColor(divContainer);
            row.appendChild(divContainer);
        }
        container.appendChild(row);
    }
}

// Divides grid in NxN entered by user
let buttonNewGrid = document.getElementById('newGrid');
buttonNewGrid.addEventListener("click",() => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let divisions = Number(document.getElementById('divisions').value);
    createGrid(divisions);
    rgbColor = null;

});


function changeColor(divContainer){
    divContainer.addEventListener('mouseover', (event) => {
        let rgb = null;
        if (rgbColor === null) {
            rgb = 'purple';
        } else {
            getColor();
            rgb = rgbColor
        }
    randomColor.addEventListener("click", getColor);
    event.target.style.backgroundColor = rgb;});
    return divContainer;
}



function getColor() {
    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${rColor} , ${gColor} , ${bColor})`
}