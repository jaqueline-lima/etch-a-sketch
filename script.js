function createGrid() {
    const container = document.querySelector('.container');
    let square,
        size,
        squareSide;

    size = 16;
    squareSide = 550/size;
    for (let i = 0; i < (size * size); i++) {
        square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `width: ${squareSide}px;`, `height: ${squareSide}px;`;
        container.appendChild(square);
    }
}

createGrid();