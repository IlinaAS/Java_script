let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
let timerInterval;
let timeElapsed = 0;

const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restartBtn');
const timeDisplay = document.getElementById('time');

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        timeDisplay.textContent = timeElapsed;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} выиграл!`);
            isGameActive = false;
            stopTimer();
            return;
        }
    }

    if (!board.includes('')) {
        alert('Ничья!');
        stopTimer();
    }
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    timeElapsed = 0;
    timeDisplay.textContent = timeElapsed;
    stopTimer();
    startTimer();
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

// Начинаем таймер при загрузке страницы
startTimer();