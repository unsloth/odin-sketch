const drawingBoard = document.querySelector('.drawing-board');
// console.log(drawingBoard.offsetWidth);

function create(dimension) {
    for (let i = 0; i < dimension; i++) {
        const column = document.createElement('div');
        column.classList.add('square');
        for (let i = 0; i < dimension; i++) {
            const row = document.createElement('div');
            row.classList.add('square');
            column.appendChild(row);
        }
        drawingBoard.appendChild(column);
    }
}

function run() {
    create(16);
}

run();