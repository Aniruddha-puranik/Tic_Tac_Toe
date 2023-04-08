let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function makeMove(index) {
    if (!gameOver && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementById("board").children[index].innerText = currentPlayer;
        document.getElementById("status").innerText = `Player ${currentPlayer}'s Turn`;
        checkWinner();
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
}

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("status").innerText = `Player ${board[a]} Wins!`;
            gameOver = true;
            break;
        }
    }
    if (!gameOver && !board.includes("")) {
        document.getElementById("status").innerText = "It's a Draw!";
        gameOver = true;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("status").innerText = `Player ${currentPlayer}'s Turn`;
    for (let cell of document.getElementById("board").children) {
        cell.innerText = "";
    }
}
