let boxes = Array.from(document.getElementsByClassName('box'))
let xText = 'X'
let oText = 'O'
let currentPlayer = xText
let spaces = Array(9).fill(null)



function startGame() {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(click) {
    console.log(click.target)
    // check if box clicked is null, if null change it to currentPlayer, then change currentPlayer to next
    if(boxes[id] == null) {

    }
}

let winningCombos = [[]]


startGame()


































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