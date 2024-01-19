// script.js

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('pixelArtBoard');
    createBoard(board, 16, 16);

    board.addEventListener('click', function(event) {
        if (event.target.classList.contains('cell')) {
            event.target.classList.toggle('active');
        }
    });

    const eraseButton = document.getElementById('eraseButton');
    eraseButton.addEventListener('click', function() {
        clearBoard(board);
    });
});

function createBoard(board, rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        board.appendChild(cell);
    }
}

function clearBoard(board) {
    board.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('active');
    });
}
