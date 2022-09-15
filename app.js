let container = document.getElementById('container');
createGrid(4);

function createGrid(divisions) {
    for (let i = 0; i < divisions; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < divisions; j++) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('divContainer');
            divContainer.addEventListener('mouseover', (event) => {
                // highlight the mouseenter target
                event.target.style.backgroundColor = "purple";});
            row.appendChild(divContainer);
        }
        container.appendChild(row);
    }
}

let buttonNewGrid = document.getElementById('newGrid');
buttonNewGrid.addEventListener("click",() => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let a = Number(document.getElementById('divisions').value);
    createGrid(a);
});

function changeColor(){
    console.log('hola');
}