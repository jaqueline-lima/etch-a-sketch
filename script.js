 function getSize() {
    const gridSize = document.querySelector('#grid');
    let size = gridSize.value;
    if (size > 100) {
        size = 100;
    } else if (size < 1) {
        size = 1;
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
    switch (squaresColor) {
        case 'black':
            square.style.cssText += 'background-color: black;';
            break;
        
        case 'white':
            square.style.cssText += 'background-color: white;';
            break;

        case 'rb':
            let rb = makeRainbow();
            square.style.cssText += rb;
            break;

        default:
            console.log(squaresColor);
            square.style.cssText += `background-color: ${squaresColor};`;
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

const whiteButton = document.querySelector('#white');
whiteButton.addEventListener('click', () => {
    squaresColor = 'white';
});

const colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', () => {
    squaresColor = colorPicker.value;
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearGrid();
});
