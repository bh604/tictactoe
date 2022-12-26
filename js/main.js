let boxes = Array.from(document.getElementsByClassName('box'))
let xText = 'X'
let oText = 'O'
let currentPlayer = xText
let spaces = Array(9).fill(null)


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}


function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer == xText ? oText : xText
    }
}

startGame()