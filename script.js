const drawingBoard = document.querySelector('.drawing-board');
const sizeButton = document.querySelector('.size');
const resetButton = document.querySelector('.reset');

let pixelColor = "black";

const colorButtons = document.querySelectorAll('.colors button');
colorButtons.forEach(c => c.addEventListener('click', changeColor));

function changeColor(e) {
    pixelColor = this.classList.value;
}

sizeButton.addEventListener('click', selectSize);
resetButton.addEventListener('click', resetBoard);

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
    this.style.backgroundColor = pixelColor;
}

function refreshPixelSelector() {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(p => p.addEventListener('mouseenter', colorIn));
}

function resetBoard(e) {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(p => p.style.backgroundColor = "white");
}

function selectSize() {
    let size = parseInt(prompt('Change size (between 1-100', '16'));
    while (isNaN(size) || (size > 100) || (size < 1)) {
        size = parseInt(prompt('Only enter an integer from 1-100', '16'));
    }
    const rows = document.querySelectorAll('.row');
    rows.forEach(r => r.remove());
    create(size);
    refreshPixelSelector();
}

function run() {
    create(16);
    refreshPixelSelector();
}

run();