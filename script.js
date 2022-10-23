const drawingBoard = document.querySelector('.drawing-board');
// console.log(drawingBoard.offsetWidth);

function create(dimension) {
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < dimension; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
        drawingBoard.appendChild(row);
    }
}

function colorIn(e) {
    this.style.backgroundColor = "black";
}

function run() {
    create(16);
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(p => p.addEventListener('mouseenter', colorIn));
}

run();