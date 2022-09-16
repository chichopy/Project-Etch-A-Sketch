const container = document.getElementById('container');
let rgbColor = null;


displayH1(16);
function displayH1(number){
    const h1 = document.querySelector('h1');
    h1.textContent = `Etch-a-Sketch  ${number} X ${number}`;
}


createGrid(16);
function createGrid(divisions) {
    for (let i = 0; i < divisions; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < divisions; j++) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('divContainer');
            divContainer = changeColor(divContainer);
            row.appendChild(divContainer);

            // Removes gap considering number of divisions
            if (divisions > 25) {
                container.style['gap'] = 0;
                row.style['gap'] = 0;
            } else{
                container.style['gap'] = '1px';
                row.style['gap'] = '1px';
            }
        }
        container.appendChild(row);
    }
}

// Divides grid in new NxN where N is a number entered by the user
let buttonNewGrid = document.getElementById('newGrid');
buttonNewGrid.addEventListener("click",() => {
    let divisions = Number(document.getElementById('divisions').value);
        // Validate divisions
        if (divisions < 1 || divisions > 100 || !Number.isInteger(divisions)) {
            divisions = document.getElementById('divisions');
            divisions.placeholder = 'limit of divisions: 100';
            return;
        }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    displayH1(divisions);
    createGrid(divisions);
    rgbColor = null;
});


function changeColor(divContainer){
    divContainer.addEventListener('mouseover', (event) => {
        let rgb = null;
        if (rgbColor === null) {
            rgb = 'purple';
        } else if (rgbColor !== 'black') {
            getRandomColor();
            rgb = rgbColor
        }
        const randomColor = document.getElementById('randomColor');
        randomColor.addEventListener("click", getRandomColor);

        const eraser = document.getElementById('eraser');
        eraser.addEventListener('click', () => {
            rgbColor = 'black';
        });

        event.target.style.backgroundColor = rgb;
    });
    return divContainer;
}


function getRandomColor() {
    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
    rgbColor = `rgb(${rColor} , ${gColor} , ${bColor})`
}