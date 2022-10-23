const drawingBoard = document.querySelector('.drawing-board');

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

function resetBoard(e) {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(p => p.style.backgroundColor = "white");
}

function run() {
    create(16);

    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(p => p.addEventListener('mouseenter', colorIn));

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', resetBoard);
}

run();