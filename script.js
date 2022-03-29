function getSize() {
    let size = prompt("Enter a number for the grid size (maximum of 100): ");
    if (size <= 100 && size > 0) {
        return size;
    } else {
        alert("Please enter a number smaller than ou equal to 100.");
        size = getSize();
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

size = getSize();
createGrid(size);