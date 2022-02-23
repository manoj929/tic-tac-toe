let cells = document.querySelectorAll('.cell');
cells = Array.from(cells)


let player1 = 'X'

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWinner() {
    winningCombinations.forEach((combination) => {
        let check = combination.every(index => cells[index].innerText.trim() == player1);
        if(check) {
            highlightCells(combination)
        }
    })
}

function highlightCells(combination) {
    combination.forEach((index)=>{
        cells[index].classList.add('highlight')
    })
}

cells.forEach((cell)=>{
    cell.addEventListener('click', ()=>{
        if(cell.innerText.trim() != '') return
        cell.innerText = player1;
        checkWinner()
        player1 = player1 == 'X' ? 'O' : 'X';
    })
})