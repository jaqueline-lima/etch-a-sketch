function getSize() {
    let size = prompt("Enter a number for the grid size (maximum of 100): ");
    while (!(size <= 100 && size > 0)) {
        alert("Please enter a number smaller than ou equal to 100.");
        size = prompt("Enter a number for the grid size (maximum of 100): ");
    }
    return size;
}

function clearGrid() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    size = getSize();
    createGrid(size);

    const squares = document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', () => {
            colorSquare(square, squaresColor);
        }) 
    });
}

function makeRainbow() {
    let r,
        g,
        b;

    r = Math.random() * 256 >> 0;
    g = Math.random() * 256 >> 0;
    b = Math.random() * 256 >> 0;

    return `background-color: rgb(${r}, ${g}, ${b});`
}

function colorSquare(square, squaresColor) {
    if (squaresColor === 'black') {
        square.style.cssText += 'background-color: black';
    } else if (squaresColor === 'rb') {
        let rb = makeRainbow();
        square.style.cssText += rb;
    }
}

function createGrid(size) {
    const container = document.querySelector('.container');
    let square,
        squareSide;

    squareSide = 550/size;
    for (let i = 0; i < (size * size); i++) {
        square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `width: ${squareSide}px;`, `height: ${squareSide}px;`;
        container.appendChild(square);
    } 
} 

createGrid(16);

let squaresColor = 'black';

const squares = document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => {
        colorSquare(square, squaresColor);
    }) 
});

const rb = document.querySelector('#rb');
rb.addEventListener('click', () => {
    squaresColor = 'rb';
});

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', () => {
    squaresColor = 'black';
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearGrid();
});
