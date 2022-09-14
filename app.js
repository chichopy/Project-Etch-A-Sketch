let container = document.getElementById('container');
let buttonNewGrid = document.getElementById('newGrid');
fillContainer(16);

function fillContainer(divisions) {
    for (let i = 0; i < divisions; i++) {
        let row = document.createElement('div')
        row.classList.add('row')

        for (let j = 0; j < divisions; j++) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('divContainer');
            row.appendChild(divContainer);
        }
        container.appendChild(row);
    }
    alert(divisions)
}


buttonNewGrid.addEventListener("click",() => {
    let a = Number(document.getElementById('divisions').value);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    fillContainer(a);
    alert(a);
});