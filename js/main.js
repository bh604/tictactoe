let boxes = Array.from(document.getElementsByClassName('box'));

const xText = 'X';
const oText = 'O';
let currentPlayer = xText;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach((box) => box.addEventListener('click', boxClicked));
};

function boxClicked(e) {
    const id = e.target.id;
    // check if box is null, fill box with currentplayer
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        // check if player has won
        if (playerHasWon() !== false) {
            console.log(`${currentPlayer} has won!`);
            let winning_blocks = playerHasWon();

            winning_blocks;
        }
        // change currentplayer to next
        currentPlayer = currentPlayer == xText ? oText : xText;
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;

        if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
            return [a, b, c];
        }
    }
    return false;
}

startGame();

// const startGame = () => {
//     boxes.forEach(box => box.addEventListener('click', boxClicked))
// }

// function boxClicked(e) {
//     const id = e.target.id

//     if(!spaces[id]) {
//         spaces[id] = currentPlayer
//         e.target.innerText = currentPlayer

//         currentPlayer = currentPlayer == xText ? oText : xText
//     }
// }

// startGame()
